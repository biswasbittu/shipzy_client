import React from 'react';
import { useNavigate } from 'react-router';

const Error = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center space-y-6">
        
        {/* 404 */}
        <h1 className="text-8xl font-extrabold text-primary">404</h1>

        {/* Message */}
        <h2 className="text-2xl font-semibold">
          Oops! Page not found 🚚
        </h2>

        <p className="text-base-content/70 max-w-md mx-auto">
          The page you're looking for doesn’t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate("/")}
            className="btn btn-primary"
          >
            Go Home
          </button>

          <button
            onClick={() => navigate(-1)}
            className="btn btn-outline"
          >
            Go Back
          </button>
        </div>

        {/* Optional branding */}
        <p className="text-sm text-base-content/50 mt-6">
          Shipzy © {new Date().getFullYear()}
        </p>
      </div>
    </div>
        </div>
    );
};

export default Error;