import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import Mapmark from '../../assets/Mapmark.png';
const MapComponent = () => {
  const customMark = L.icon({
    iconUrl: Mapmark,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  const locations = [
    {
      id: 1,
      name: 'Head office',
      address: '22 Khreshchatyk Street, Kyiv, Ukraine',
      lat: 50.4501,
      lng: 30.5234,
    },
    {
      id: 2,
      name: 'Office in Podil',
      address: '15 Verkhniy Val Street',
      lat: 50.4725,
      lng: 30.5143,
    },
    {
      id: 3,
      name: 'Office near the Olympic Stadium',
      address: '55 Velyka Vasylkivska Street',
      lat: 50.434,
      lng: 30.5215,
    },
    {
      id: 4,
      name: 'Western office',
      address: '5 Rynok Square, Lviv, Ukraine',
      lat: 49.8419,
      lng: 24.0315,
    },
    {
      id: 5,
      name: 'Office on Stryiska Street',
      address: '45 Stryiska Street',
      lat: 49.8225,
      lng: 24.009,
    },
    {
      id: 6,
      name: 'Office near Potocki Palace',
      address: '15 Kopernika Street',
      lat: 49.8414,
      lng: 24.0179,
    },
    {
      id: 7,
      name: 'Eastern office',
      address: '72 Dmytro Yavornytskyi Avenue, Dnipro, Ukraine',
      lat: 48.4647,
      lng: 35.0462,
    },
    {
      id: 8,
      name: 'Office on Kosmichna Street',
      address: '50 Kosmichna Street',
      lat: 48.4867,
      lng: 35.0348,
    },
    {
      id: 9,
      name: 'Office near Central Park of Culture',
      address: '3 Shevchenko Street',
      lat: 48.4649,
      lng: 35.0521,
    },
    {
      id: 10,
      name: 'Home su4ki',
      address: '9th May Street',
      lat: 45.205307,
      lng: 33.338744,
    },
  ];

  return (
    <div className='w-full flex flex-col items-center pt-20 '>
      <h2 className='text-2xl font-bold mb-4 px-4 py-2 rounded-lg'>
        You cand find us here!
      </h2>
      <div className='w-300 h-150 rounded-2xl border-4 border-green-500 p-2 shadow-xl bg-white'>
        <MapContainer
          center={[50.4501, 30.5234]}
          zoom={10}
          className='w-full h-full rounded-xl'
        >
          <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {locations.map(loc => (
            <Marker key={loc.id} position={[loc.lat, loc.lng]} icon={customMark}>
              <Popup>{`${loc.address} (${loc.name})`}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapComponent;
