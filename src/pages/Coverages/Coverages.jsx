import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'

const Coverages = () => {
    const position = [23.24, 88.58]
    return (
        <div>
            <h1 className='text-xl text-center'>We are avelable in 23 District</h1>
            <div>
                {/* Search Bar */}
            </div>
            {/* Map Container */}
            <div className='border w-full h-[600px]'>
                <MapContainer className='h-[600px]' center={position} zoom={8} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
            </MapContainer>
            </div>

        </div>
    );
};

export default Coverages;