import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 absolute top-0 w-full p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className='flex w-full justify-between'>
          <ul className="flex w-full justify-between space-x-4">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `${isActive ? 'text-3xl' : 'text-2xl'} text-white transition-all duration-500 hover:text-red-500 hover:pr-15 font-mono`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/dashboard" 
                className={({ isActive }) => 
                  `${isActive ? 'text-3xl' : 'text-2xl'} text-white transition-all duration-500 hover:text-red-500 hover:pl-15 font-mono`
                }
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
