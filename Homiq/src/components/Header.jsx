import { FaHeart, FaGear } from 'react-icons/fa6';

const Header = () => {
  return (
    <header className='flex items-center justify-between w-full px-20 py-4 bg-[#F5F5F5]'>
      <a href='#' className='uppercase text-green-500 font-medium text-2xl '>
        Homeiq
      </a>

      <nav className='flex gap-6 '>
        <a href='' className='text-lg font-semibold hover:text-green-400'>
          Home
        </a>
        <a href='' className='text-lg font-semibold hover:text-green-400'>
          Property
        </a>
        <a href='' className='text-lg font-semibold hover:text-green-400'>
          About us
        </a>
        <a href='' className='text-lg font-semibold hover:text-green-400'>
          Contact
        </a>
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
