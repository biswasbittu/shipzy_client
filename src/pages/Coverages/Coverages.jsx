import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { useLoaderData } from 'react-router';

const Coverages = () => {
    const position = [23.24, 88.58]
    const serviceCenters = useLoaderData();
    const mapRef =useRef(null)

    const handleSearch = (e)=>{
           e.preventDefault();
           const location = e.target.location.value;
            const district = serviceCenters.find(c=>c.district.toLowerCase().includes(location.toLowerCase()));
            if(district){
                const {longitude,latitude}=district;
                const coord=[latitude,longitude];
                console.log(district,coord)
                mapRef.current.flyTo(coord,12);
            }
    }

    return (
        <div>
            <h1 className='text-xl text-center'>We are avelable in 23 District</h1>
            <div>
                {/* Search Bar */}

                <form  onSubmit={handleSearch}>
                    <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" name='location' className="grow" placeholder="Search location ..." />
                </label>
                
                </form>

            </div>
            {/* Map Container */}
            <div className='border w-full h-[600px] my-4'>
                <MapContainer 
                className='h-[600px]' 
                center={position} 
                zoom={7} 
                scrollWheelZoom={false}
                ref={mapRef}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        serviceCenters.map(center => <Marker key={center.id} position={[center.latitude, center.longitude]}>
                            <Popup>
                                <strong>{center.district}</strong> <br /> <strong className='font-semibold'> Service Area :</strong>  {center.covered_area.join(', ')}.
                            </Popup>
                        </Marker>)
                    }
                </MapContainer>
            </div>

        </div>
    );
};

export default Coverages;