import { bgHouse } from '../../assets/backgrounds/bg';

const Hero = ({ topRef }) => {
  return (
    <div
      ref={topRef}
      className='bg-[#F5F5F5] w-full md:pl-15 pl-5 relative md:h-190 h-150'
    >
      <span className='uppercase w-30 h-10 bg-[#F8F9FE] text-[#69B99D] text-center text-sm pt-3 inline-block mt-10 font-semibold'>
        Real Estate
      </span>
      <h1 className='md:text-7xl text-4xl font-bold md:w-170 w-80 mt-10 text-[#1F2744]  '>
        Let's hunt for your dream residence
      </h1>
      <p className='text-[#73788C] md:text-lg md:w-130 w-90 mt-4 md:pb-80 mb-10 '>
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
