
import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <div className="relative w-14 h-14 overflow-hidden rounded-full">
        <div className="absolute inset-0 bg-[url('https://cdn0.iconfinder.com/data/icons/tourism-12/128/tourism-05-512.png')] bg-cover bg-center rounded-full flex transition-colors duration-500"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Stylized river and mountain logo */}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-lg font-display font-bold text-green-700 leading-tight group-hover:text-green-600 transition-colors duration-300">
          Nature Loves Adventure
        </span>
        <span className="text-base font-medium text-blue-600 group-hover:text-blue-500 transition-colors duration-300">
          Tanzania
        </span>
      </div>
    </Link>
  );
};

export default Logo;
