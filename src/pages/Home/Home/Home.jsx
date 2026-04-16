import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import HowitWork from '../HowitWork/HowitWork';
import OurService from '../OurService/OurService';
import Brands from '../Brands/Brands';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    
    const [reviews, setReviews]=useState([]);

    useEffect(()=>{
        fetch("review.json")
        .then(res=>res.json())
        .then(data=>setReviews(data))
        .catch(err=>console.log(err))
    },[])

    
    return (
        <div>
            <Banner/>
            <HowitWork/>
            <OurService/>
            <Brands/>
            <Reviews reviews={reviews} />
        </div>
    );
};

export default Home;