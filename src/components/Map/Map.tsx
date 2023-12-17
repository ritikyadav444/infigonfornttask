import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

interface MapProps {
  center: [number, number];
  markers: Array<{ position: [number, number]; content: string }>;
  zoom: number;
}

const Map: React.FC<MapProps> = ({  markers }) => {
  return (
    <MapContainer   style={{ height: '400px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position}>
          <Popup>{marker.content}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
