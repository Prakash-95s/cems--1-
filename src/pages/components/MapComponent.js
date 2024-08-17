import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapComponent = () => {
  return (
    <MapContainer center={[20, 77]} zoom={2} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[28.6139, 77.2090]}>
        <Popup>New Delhi, India</Popup>
      </Marker>
      <Marker position={[55.7558, 37.6173]}>
        <Popup>Moscow, Russia</Popup>
      </Marker>
      <Marker position={[45.4215, -75.6972]}>
        <Popup>Ottawa, Canada</Popup>
      </Marker>
      <Marker position={[-6.2088, 106.8456]}>
        <Popup>Jakarta, Indonesia</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
