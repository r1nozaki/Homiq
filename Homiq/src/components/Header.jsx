import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { auth } from '../firebaseConfig';

import { FaHeart, FaGear } from 'react-icons/fa6';

const Header = () => {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      user ? setUserEmail(user.email) : setUserEmail('');
    });
    return () => unsubscribe();
  }, []);
  return (
    <header className='flex items-center justify-between w-full px-20 py-4 bg-[#F5F5F5]'>
      <Link to='/home' className='uppercase text-green-500 font-medium text-2xl '>
        Homiq
      </Link>

      <nav className='flex gap-6'>
        {[
          { to: '/home', label: 'Home' },
          { to: '/property', label: 'Property' },
          { to: '/about', label: 'About us' },
          { to: '/contact', label: 'Contact' },
        ].map(({ to, label }) => (
          <NavLink key={to} to={to}>
            {({ isActive }) => (
              <div className='flex flex-col items-center'>
                <span
                  className={`text-lg font-semibold transition-colors ${
                    isActive ? 'text-green-500' : 'text-black hover:text-green-400'
                  }`}
                >
                  {label}
                </span>
                {isActive && (
                  <span className='w-2 h-2 mt-1 bg-green-400 rounded-full animate-fadeIn' />
                )}
              </div>
            )}
          </NavLink>
        ))}
      </nav>

      <div className='flex items-center gap-6'>
        <Link to='/favorite' className='text-black cursor-pointer hover:text-green-400'>
          <FaHeart className='' size={22} />
        </Link>
        <a className='text-black cursor-pointer hover:text-green-400'>
          <FaGear size={22} />
        </a>
        <div className='w-10 h-10 flex items-center justify-center bg-green-400 text-black rounded-full text-lg font-bold'>
          {userEmail ? userEmail.charAt(0).toUpperCase() : 'NA'}
        </div>
      </div>
    </header>
  );
};

export default Header;
