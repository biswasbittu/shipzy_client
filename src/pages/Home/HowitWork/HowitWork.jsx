import React, { useState } from 'react';
import { useEffect } from 'react';
import { FaBuilding, FaMoneyBillWave, FaTruckPickup, FaWarehouse } from 'react-icons/fa';
import SingleWork from '../SingleWork/SingleWork';

const HowitWork = () => {
    const iconMap = {
        FaTruckPickup,
        FaMoneyBillWave,
        FaWarehouse,
        FaBuilding,
    };


    const [works, setWork] = useState([]);
    const [workError, setWorkError] = useState(null);


    useEffect(() => {
        fetch("worksData.json")
            .then(res => res.json())
            .then(data => setWork(data))
            .catch(error => setWorkError(error.message))
    }, [])

    return (
        <div className='my-4 mx-4 bg-base-300'>
            <p>{workError ? workError : ""}</p>
            <h2 className='text-xl md:text-4xl'>How it Works</h2>
            <div className='flex flex-col md:flex-row gap-4 justify-center items-center my-4 lg:p-4'>

                {
                    works.map((work) => {
                        const Icon = iconMap[work.icon];  // 👈 important
                        return <SingleWork key={work.id} work={work} Icon={Icon} ></SingleWork>               

                       
})
                }
            </div>

        </div>
    );
};

export default HowitWork;