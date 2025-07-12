import { FaQuoteLeft } from 'react-icons/fa';

const FeedbackCard = ({ title, text, avatar, name, position }) => {
  return (
    <div className='border border-[#DEDCDA] w-94 h-87.5 p-6 transition-all duration-300 hover:shadow-xl hover:border-[#69B99D] hover:scale-105'>
      <FaQuoteLeft size={42} className='text-gray-100' />
      <h2 className='w-66 text-lg text-[#1F2744] font-semibold mt-6'>{title}</h2>
      <p className='w-82 text-[#1F2744] mt-4 h-24'>{text}</p>
      <div className='flex w-55 gap-3.5 mt-6'>
        <img src={avatar} alt={name} className='w-12 h-12' />
        <div className='w-45.5 flex flex-col '>
          <span className='text-[#0B2E29] font-semibold text-base'>{name}</span>
          <span className='text-gray-400 text-xs'>{position}</span>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
