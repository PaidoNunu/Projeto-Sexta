require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const app = express()
const cors = require('cors')

app.use(cors())
//CONFIG JSON
app.use(express.json())
//Models
const User = require('./models/User')
//PUBLIC ROUTE

 
app.get('/', (req,res)=>(
    res.status(200).json({msg:'Bem vindo à nossa API'})
))
app.get('/user/:id', async(req,res)=>{
    const id = req.params.id
    //CHECKAR SE EXISTE
    const user = await User.findById(id, '-password')
    if(!user){
        return res.status(404).json({msg:"Usuário não encontrado"})
    }
    res.status(200).json({ user })
})
//PRIVATE ROUTE
app.get('/user/:id',checkToken, async(req,res)=>{
    const id = req.params.id
    
    //CHECKAR SE EXISTE
    const user = await User.findById(id, '-password')
    if(!user){
        return res.status(404).json({msg:"Usuário não encontrado"})
    }
    res.status(200).json({ user })
})

function checkToken(req,res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]
    if(!token){
        return res.status(401).json({msg:"Sem permissão"})
    }
    try{
        const secret = process.env.SECRET
        jwt.verify(token, secret)
        req.user = { userId: decodedToken.user._id };
        next()
    }catch(error){
        res.status(400).json({msg:"Token Inválido"})
    }

}
//REGISTER USER
app.post('/user', async(req, res)=>{
    const {name, email, password, confirmPassword} =req.body
    //VALIDAÇÕES
    
    
    if(!name){
    return res.status(422).json({msg:"O nome é obrigatório"})
    }
    if(!email){
        return res.status(422).json({msg:"O email é obrigatório"})
        }
    if(!password){
            return res.status(422).json({msg:"A senha é obrigatória"})
        }
    if(password != confirmPassword){
        return res.status(422).json({msg:"As senhas não conferem!"})
    }
    //CHECK VALIDAÇÂO USER EXISTS
    const userExists = await User.findOne({email:email})
    if(userExists){
        return res.status(422).json({msg:"Por favor utilize outro email de usuário"})
    }

    //CREATE PASSWORD
    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)
    //CREATE USER
    const user = new User({
        name,
        email,
        password:passwordHash,
    })
    
    try {
        await user.save()
        res.status(201).json({msg: "Usuário cadastrado"})

    }catch(err){
        console.log(error)
        res.status(500).json({msg:"Houve um erro no sistemas"})
    }

})
//LOGIN USER
app.post('/Login', async(req, res)=>{
    const {email, password}= req.body
    //validação
    if(!email){
        return res.status(422).json({msg:"O email é obrigatório"})
        }
    if(!password){
            return res.status(422).json({msg:"A senha é obrigatória"})
        }
    //Checando
    const user = await User.findOne({email:email})
    if(!user){
        return res.status(422).json({msg:"usuário não preenchido"})
    }
     //CHECKANDO SENHAS IGUAIS
     const checkPassword = await bcrypt.compare(password, user.password)
     if(!checkPassword){
         return res.status(422).json({ msg:"Senha Inválida"})
     }
     try{
        const secret = process.env.SECRET
        const token = jwt.sign(
        {
            id: user._id,
        },
        secret, 
    )
        res.status(200).json({msg:"Autenticaçao realizada com sucesso",token})

     }catch(err){
        console.log(error)
        res.status(500).json({msg:"Houve um erro no sistemas"})
     }
 
    })
   







//CREDENCIAIS
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.fmsufbi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`).then(()=>{
    app.listen(5000)
    console.log("CONECTOU AO BANNCO")
} ).catch((err)=> console.log(err))

