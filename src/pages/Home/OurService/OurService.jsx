import React, { useEffect, useState } from 'react';
import { FaBoxes, FaBuilding, FaGlobeAsia, FaMoneyBillWave, FaShippingFast, FaUndoAlt } from 'react-icons/fa';
import Service from '../Service/Service';

const OurService = () => {
    const iconMap = {
        FaShippingFast,
        FaGlobeAsia,
        FaBoxes,
        FaMoneyBillWave,
        FaBuilding,
        FaUndoAlt,
    };

    const [services, setServices] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch("services.json")
            .then(res => res.json()
                .then(data => setServices(data)))
            .catch(error => setError(error.message))
    }, [])

    return (
        <div className='my-4 mx-4 bg-base-300'>
            <p className='text-red-500'>{error ? error : ""}</p>
            <h1 className='text-xl md:text-4xl text-center'>Our Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4 lg:mx-16'>
                {
                    services.map(service=>{
                        const Icon = iconMap[service.icon]
                        return <Service key={service.id} service={service} Icon={Icon}></Service>
                    })
                }
            </div>
        </div>
    );
};

export default OurService;