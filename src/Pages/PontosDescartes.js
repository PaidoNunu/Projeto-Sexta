import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import "../../node_modules/leaflet/dist/leaflet.css"
import "../App.css"
import styles from '../components/PontosDescartes.module.css'
function PontosDescartes() {
  return (
    <div className={styles.leafletcontainer}>
      <MapContainer center={[-8.047562, -34.877003]} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-8.047562, -34.877003]} icon={new Icon({
          iconUrl: require('leaflet/dist/images/marker-icon.png'),
          iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
          shadowUrl: require('leaflet/dist/images/marker-shadow.png')
        })}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      </div>
  );
}
export default PontosDescartes;