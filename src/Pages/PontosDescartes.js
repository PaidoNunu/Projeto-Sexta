import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import "../../node_modules/leaflet/dist/leaflet.css"
import "../App.css"
import styles from '../components/PontosDescartes.module.css'
import { Index } from './index.tsx';
import {Mapa} from "./mapa.tsx"


function PontosDescartes() {
  return (
    <div className={styles.div}>
    <div className={styles.input}><Index/></div>
    <div className={styles.map}><Mapa/></div>
    </div>
  );
}
export default PontosDescartes;