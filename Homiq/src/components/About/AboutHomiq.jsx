import { Link } from 'react-router-dom';

import aboutUs from '../../assets/aboutUs.png';
import { FaCheck, FaStar } from 'react-icons/fa';

const AboutHomiq = () => {
  return (
    <div className='flex gap-14 bg-[#F5F5F5] pt-20 md:px-15 px-5'>
      <div className='relative md:h-143  hidden md:block'>
        <div className='w-43 h-63 bg-[#FEFEFF] absolute left-25  flex flex-col items-center'>
          <div className=' bg-green-400 rounded-md w-8 h-8 flex items-center justify-center text-white mt-1'>
            <FaCheck />
          </div>
          <span className='text-7xl text-[#054457] text-center mt-4'>4.8</span>
          <div className='flex gap-1 text-green-400 mt-2'>
            <FaStar size={18} />
            <FaStar size={18} />
            <FaStar size={18} />
            <FaStar size={18} />
            <FaStar size={18} />
          </div>
          <span className='text-gray-400 text-xs md:text-lg md:mt-4'>Trusted on</span>
          <span className='text-[#054457] text-lg text-center'>500+ Reviews</span>
        </div>
        <div className='w-128 h-21 bg-white absolute md:left-24.5 left-10 -bottom-1 flex gap-8 px-8 items-center text-center'>
          <div className='flex items-center'>
            <span className='text-[#054457] text-5xl font-bold'>250+</span>
            <span className='w-18 text-lg text-gray-400'>Property Sale</span>
          </div>
          <div className='flex items-center'>
            <span className='text-[#054457] text-5xl font-bold'>550+</span>
            <span className='w-18 text-lg text-gray-400'>Apartmen Rent</span>
          </div>
        </div>
        <img src={aboutUs} alt='room' className='mt-24 h-119 w-152' />
      </div>

      <div>
        <span className='uppercase w-30 h-10 bg-[#F8F9FE] text-[#69B99D] text-center text-sm pt-3 inline-block md:mt-33 font-semibold'>
          About us
        </span>
        <h2 className='text-2xl md:text-5xl text-[#054457] md:w-132 w-56 mt-4'>
          How much is your property worth now?
        </h2>
        <p className='text-sm md:text-lg md:w-126 w-60 text-gray-500 mt-4'>
          We have built our reputation as true local area experts. We have gained more
          knowledge about buyer interests, our neighborhood and the market than any other
          brand because we live locally and work for local people.
        </p>
        <Link
          to='/about'
          className='border-none w-18.5 h-6 md:w-46.5 md:h-15 bg-green-400 text-white block text-center pt-1 md:pt-4 text-xs md:text-lg md:mt-12 mt-6 mb-2 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:bg-green-500 '
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default AboutHomiq;
