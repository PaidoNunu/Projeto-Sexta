import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import "../../node_modules/leaflet/dist/leaflet.css"
import "../App.css"
import styles from '../components/PontosDescartes.module.css'
import { Index } from './index';


export const Mapa = () => {
  return (
    
    <div>
        
    <div >
      <MapContainer center={[-8.047562, -34.877003]} zoom={7} className={styles.leafletcontainer} >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-8.047562, -34.877003]} icon={new Icon({
          iconUrl: require('leaflet/dist/images/marker-icon.png'),
          iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
          shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
          iconSize:    [25, 41],
          iconAnchor:  [12, 41],
          popupAnchor: [1, -34],
          tooltipAnchor: [16, -28],
          shadowSize:  [41, 41]
        })}>
          
          <Popup>
           voce esta aqui 
          </Popup>
        </Marker>
      </MapContainer>
      </div>
      </div>
  );
}