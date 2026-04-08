import React from 'react';

const SingleWork = ({ work, Icon }) => {
    const { title, description } = (work)
    return (
        <div>
            <div className="card card-border bg-base-100 max-w-96 w-full">
                <div className="card-body border-2">
                    <div className="card-actions justify-start">
                        <span>   {/* fallback if icon not found */}
                            {Icon ? <Icon className="text-3xl text-green-600 mb-4" /> : (
                                <p className="text-red-500">Icon missing</p>
                            )}</span>
                    </div>
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>

                </div>
            </div>
        </div>
    );
};

export default SingleWork;