import React, { useState } from 'react';
import {Locais} from "./locais.ts"
import '../components/PontosDescartes.module.css';

export const Index = () => {

    
    

const [search, setSearch] = React.useState('')

const searchLowerCase = search.toLocaleLowerCase()

const localidade = search ?  Locais.filter(city => city.bairro.toLocaleLowerCase().includes(searchLowerCase)): [];



const inputStyle = {
    padding: "10px",
    height: "40px",
    fontSize: "16px",
    fontWeight: "400",
    width: "500px",
    outline: "none",
    borderRadius: "15px",
    border: "none",
    marginLeft: "100px",
    backgroundColor: "rgb(26, 70, 26)",
    color: "white",
    display: "flex",
    alignItems:"center"
  };

    return (
            <div color='gray'>
                 
                 <h1 style={{ color: '#4F4F4F' }}>Escolha seu ponto de descarte !!!
                    
                 </h1>

                        

                <div>   
                    <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} style={inputStyle} />
                {search &&(
                    <ul style={{ listStyle:"none"}}>
                        {localidade.map((city) => (
                            <li key={city.bairro}>
                              <button> <p>{city.bairro}</p></button> 
                            </li>
                            ))}
                    </ul>
                )}
                </div>

            </div>
    );
};

