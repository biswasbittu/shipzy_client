import React from 'react';

const Service = ({ service, Icon }) => {
    const { title, description, highlight } = service;
    return (
        <div >
            <div className={`card max-w-96 shadow-sm transition-all duration-300 ease-in-out transform 
                 hover:-translate-y-2 hover:shadow-xl 
                 active:scale-95  
                        cursor-pointer
                      `}>
                <div className="card-actions justify-center pt-2">
                    <span>   {/* fallback if icon not found */}
                        {Icon ? <Icon className="text-3xl text-green-600 hover:text-white mb-4" /> : (
                            <p className="text-red-500">Icon missing</p>
                        )}</span>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>

                </div>
            </div>
        </div>
    );
};

export default Service;