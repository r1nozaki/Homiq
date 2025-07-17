import { Link, NavLink } from 'react-router';
import { FaHeart, FaGear } from 'react-icons/fa6';

const Header = () => {
  return (
    <header className='flex items-center justify-between w-full px-20 py-4 bg-[#F5F5F5]'>
      <Link to='/home' className='uppercase text-green-500 font-medium text-2xl '>
        Homeiq
      </Link>

      <nav className='flex gap-6'>
        {[
          { to: '/home', label: 'Home' },
          { to: '/property', label: 'Property' },
          { to: '/aboutus', label: 'About us' },
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
        <a className='text-black cursor-pointer hover:text-green-400'>
          <FaHeart className='' size={22} />
        </a>
        <a className='text-black cursor-pointer hover:text-green-400'>
          <FaGear size={22} />
        </a>
        <div className='w-10 h-10 flex items-center justify-center bg-green-400 text-black rounded-full text-lg font-bold'>
          V
        </div>
      </div>
    </header>
  );
};

export default Header;
