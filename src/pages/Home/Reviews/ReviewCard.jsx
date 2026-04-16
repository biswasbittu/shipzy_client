import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewCard = ({review}) => {
    const {userName,review:text,user_photoURL}=review;
    return (
        <div>
            <div className="w-full px-4 sm:px-6 md:px-8">
      <div className="card bg-base-200 shadow-md rounded-2xl 
                      w-full max-w-md mx-auto 
                      p-4 sm:p-6 md:p-8">

        {/* Quote Icon */}
        <FaQuoteLeft className="text-3xl sm:text-4xl text-gray-400 mb-3 sm:mb-4" />

        {/* Review Text */}
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
         {text}
        </p>

        {/* Divider */}
        <div className="border-t border-dashed border-gray-400 my-4 sm:my-5"></div>

        {/* User Info */}
        <div className="flex items-center gap-3 sm:gap-4">

          {/* Avatar */}
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-teal-800 flex items-center justify-center text-white font-semibold">
            <img className='rounded-full' src={user_photoURL} alt={userName} />
          </div>

          {/* Name + Role */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg text-gray-800">
              {userName}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500">
              Senior Product Designer
            </p>
          </div>

        </div>
      </div>
    </div>
        </div>
    );
};

export default ReviewCard;