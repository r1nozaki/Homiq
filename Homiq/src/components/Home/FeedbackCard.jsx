import { FaQuoteLeft } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

const FeedbackCard = ({ title, text, avatar, name, position }) => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`border w-94 h-87.5 p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 ${
        darkMode
          ? 'border-green-400 hover:border-green-400'
          : 'border-[#69B99D] md:border-[#DEDCDA] hover:border-[#69B99D]'
      }`}
    >
      <FaQuoteLeft
        size={42}
        className={`transition-colors duration-300 ${
          darkMode ? 'text-gray-700' : 'text-gray-100'
        }`}
      />
      <h2
        className={`w-66 text-lg font-semibold mt-6 transition-colors duration-300 ${
          darkMode ? 'text-white' : 'text-[#1F2744]'
        }`}
      >
        {title}
      </h2>
      <p
        className={`w-82 mt-4 h-24 transition-colors duration-300 ${
          darkMode ? 'text-gray-300' : 'text-[#1F2744]'
        }`}
      >
        {text}
      </p>
      <div className='flex w-55 gap-3.5 mt-6'>
        <img loading='lazy' src={avatar} alt={name} className='w-12 h-12' />
        <div className='w-45.5 flex flex-col '>
          <span
            className={`font-semibold text-base transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-[#0B2E29]'
            }`}
          >
            {name}
          </span>
          <span className='text-gray-400 text-xs'>{position}</span>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
