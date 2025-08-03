import { useTheme } from '../../context/ThemeContext';

const AdvantageCard = ({ icon, title, descr }) => {
  const { darkMode } = useTheme();
  
  return (
    <div className='max-w-xs'>
      <div className='mb-2 text-green-400'>{icon}</div>
      <h3 className={`md:text-xl text-lg font-bold mt-1 transition-colors duration-300 ${
        darkMode ? 'text-white' : 'text-black'
      }`}>{title}</h3>
      <p className={`md:text-lg text-base mt-2 transition-colors duration-300 ${
        darkMode ? 'text-gray-300' : 'text-gray-600'
      }`}>{descr}</p>
    </div>
  );
};

export default AdvantageCard;
