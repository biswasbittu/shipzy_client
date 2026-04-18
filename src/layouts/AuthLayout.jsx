import React from 'react';
import Logo from '../components/Logo/Logo';
import { Outlet } from 'react-router';
import authImg from '../assets/authImg/login.jpeg'
const AuthLayout = () => {
    return (
        <div className='container mx-auto'>
            <Logo />
            <div className='flex flex-col-reverse md:flex-row justify-center items-center'>
                <div className='flex-1   md:pl-96'>
                    <Outlet />
                </div>
                <div className='flex-1 justify-center items-center flex  py-12'>
                    <img className='md:w-3/4 ' src={authImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;