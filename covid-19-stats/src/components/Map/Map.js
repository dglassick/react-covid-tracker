import React from 'react';
import { MapContainer as LeafletMap, TileLayer, useMap } from 'react-leaflet';
import './Map.css';
import { showDataOnMap } from '../../utils/helper';

function ChangeMap({ center, zoom }) {
  const map = useMap();
  map.setView(center, (zoom = 4));
  return null;
}

function Map({ countries, casesType, center, zoom }) {
  return (
    <div className='map'>
      <LeafletMap>
        <ChangeMap center={center} zoom={zoom} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </div>
  );
}

export default Map;
