import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaBars } from 'react-icons/fa';
import { FaHeart, FaGear } from 'react-icons/fa6';
import { useTheme } from '../context/ThemeContext';

const Header = ({ isFooterVisible }) => {
  const location = useLocation();
  const [userEmail, setUserEmail] = useState('');
  const [openBurger, setOpenBurger] = useState(false);
  const { darkMode } = useTheme();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      user ? setUserEmail(user.email) : setUserEmail('');
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    setOpenBurger(false);
  }, [location.pathname]);

  const navItems = [
    { to: '/home', label: 'Home' },
    { to: '/property', label: 'Property' },
    { to: '/about', label: 'About us' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isFooterVisible ? -100 : 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-10 py-4 z-50 transition-colors duration-300 ${
        darkMode ? 'bg-gray-800' : 'bg-[#F5F5F5]'
      }`}
    >
      <Link to='/home' className='uppercase text-green-500 font-medium text-2xl'>
        Homiq
      </Link>

      <button
        className='md:hidden focus:outline-none text-green-500'
        onClick={() => setOpenBurger(!openBurger)}
      >
        {openBurger ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <AnimatePresence>
        {openBurger && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`absolute top-16 left-0 w-full flex flex-col items-center gap-6 p-4 shadow-lg z-40 md:hidden transition-colors duration-300 ${
              darkMode ? 'bg-gray-700' : 'bg-white'
            }`}
          >
            {navItems.map(({ to, label }) => (
              <NavLink key={to} to={to}>
                {({ isActive }) => (
                  <div className='flex flex-col items-center'>
                    <span
                      className={`text-lg font-semibold transition-colors ${
                        isActive ? 'text-green-500' : `${darkMode ? 'text-white' : 'text-black'} hover:text-green-400`
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

            <div className='flex items-center gap-10 mt-4'>
              <Link to='/favorite' className={`${darkMode ? 'text-white' : 'text-black'} hover:text-green-400`}>
                <FaHeart size={22} />
              </Link>
              <Link to='/settings' className={`${darkMode ? 'text-white' : 'text-black'} hover:text-green-400`}>
                <FaGear size={22} />
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <nav className='hidden md:flex items-center gap-6'>
        {navItems.map(({ to, label }) => (
          <NavLink key={to} to={to}>
            {({ isActive }) => (
              <div className='flex flex-col items-center'>
                <span
                  className={`text-lg font-semibold transition-colors ${
                    isActive ? 'text-green-500' : `${darkMode ? 'text-white' : 'text-black'} hover:text-green-400`
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

      <div className='hidden md:flex items-center gap-6'>
        <Link to='/favorite' className={`${darkMode ? 'text-white' : 'text-black'} hover:text-green-400`}>
          <FaHeart size={22} />
        </Link>
        <Link to='/settings' className={`${darkMode ? 'text-white' : 'text-black'} hover:text-green-400`}>
          <FaGear size={22} />
        </Link>
        <div className={`w-10 h-10 flex items-center justify-center rounded-full text-lg font-bold transition-colors duration-300 ${
          darkMode ? 'bg-green-500 text-white' : 'bg-green-400 text-black'
        }`}>
          {userEmail ? userEmail.charAt(0).toUpperCase() : 'NA'}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
