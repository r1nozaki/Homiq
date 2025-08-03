import { bgHouse } from '../../assets/backgrounds/bg';
import { useTheme } from '../../context/ThemeContext';

const Hero = ({ topRef }) => {
  const { darkMode } = useTheme();
  
  return (
    <div
      ref={topRef}
      className={`w-full md:pl-15 pl-5 relative md:h-190 h-150 transition-colors duration-300 ${
        darkMode ? 'bg-gray-900' : 'bg-[#F5F5F5]'
      }`}
    >
      <span className={`uppercase w-30 h-10 text-center text-sm pt-3 inline-block mt-10 font-semibold transition-colors duration-300 ${
        darkMode ? 'bg-gray-800 text-green-400' : 'bg-[#F8F9FE] text-[#69B99D]'
      }`}>
        Real Estate
      </span>
      <h1 className={`md:text-7xl text-4xl font-bold md:w-170 w-80 mt-10 transition-colors duration-300 ${
        darkMode ? 'text-white' : 'text-[#1F2744]'
      }`}>
        Let's hunt for your dream residence
      </h1>
      <p className={`md:text-lg md:w-130 w-90 mt-4 md:pb-80 mb-10 transition-colors duration-300 ${
        darkMode ? 'text-gray-300' : 'text-[#73788C]'
      }`}>
        Explore our range of beautiful properties with the addition of separate
        accommodation suitable for you.
      </p>
      <img
        className='absolute right-0 top-55 md:top-0 w-100 h-75.7 md:w-201.5 md:h-190'
        src={bgHouse}
        alt='House '
      />
    </div>
  );
};

export default Hero;
