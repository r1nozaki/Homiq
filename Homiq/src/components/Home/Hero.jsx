import { bgHouse } from '../../assets/backgrounds/bg';

const Hero = ({ topRef }) => {
  return (
    <div ref={topRef} className='bg-[#F5F5F5] w-full pl-20 relative h-190 '>
      <span className='uppercase w-30 h-10 bg-[#F8F9FE] text-[#69B99D] text-center text-sm pt-3 inline-block mt-10 font-semibold'>
        Real Estate
      </span>
      <h1 className='text-7xl font-bold w-170 mt-10 text-[#1F2744] '>
        Let's hunt for your dream residence
      </h1>
      <p className='text-[#73788C] text-lg w-130 mt-4 pb-80'>
        Explore our range of beautiful properties with the addition of separate
        accommodation suitable for you.
      </p>
      <img className='absolute right-0 top-0' src={bgHouse} alt='House ' />
    </div>
  );
};

export default Hero;
