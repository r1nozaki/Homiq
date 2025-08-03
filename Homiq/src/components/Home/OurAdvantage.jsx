import AdvantageCard from './AdvantageCard';
import {
  FaHeart,
  FaShieldAlt,
  FaStar,
  FaTag,
  FaMapMarkerAlt,
  FaClock,
} from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

const advantages = [
  {
    icon: <FaHeart size={35} />,
    title: 'Comfortable',
    descr:
      "Enjoy lifestyle amenities designed to provide every homeowners modern comfort, a stone's throw away from schools, churches, and hospitals.",
  },
  {
    icon: <FaShieldAlt size={35} />,
    title: 'Extra security',
    descr:
      'You can connect with potential tenants without having to share your phone number. We also require all users to register to validate their legitimacy.',
  },
  {
    icon: <FaStar size={35} />,
    title: 'Luxury',
    descr:
      'Find out how we provide the highest standard of professional property management to give you all the benefits of property.',
  },
  {
    icon: <FaTag size={35} />,
    title: 'Best price',
    descr:
      'Not sure what you should be charging for your property? Let us do the numbers for you—contact us today for a free rental appraisal on your home.',
  },
  {
    icon: <FaMapMarkerAlt size={35} />,
    title: 'Strategic location',
    descr:
      'located in the city center close to the shopping center. Very good for areas surrounded by international education centers, start-up office centers.',
  },
  {
    icon: <FaClock size={35} />,
    title: 'Efficient',
    descr:
      'Schedule visits to multiple properties at once in one day without having to call them one by one. Check everything and find the best properties for rent',
  },
];

const OurAdvantage = () => {
  const { darkMode } = useTheme();
  
  return (
    <div className={`w-full md:pl-15 pl-5 transition-colors duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <span className={`uppercase w-30 h-10 text-center text-sm pt-3 inline-block mt-13 font-semibold transition-colors duration-300 ${
        darkMode ? 'bg-gray-800 text-green-400' : 'bg-[#F5F5F5] text-[#69B99D]'
      }`}>
        Our Advantage
      </span>
      <h2 className={`md:text-5xl text-2xl font-bold md:w-100 w-50 mt-4 transition-colors duration-300 ${
        darkMode ? 'text-white' : 'text-[#054457]'
      }`}>
        Giving you peace of mind
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 mb-20'>
        {advantages.map((item, index) => (
          <AdvantageCard
            key={index}
            icon={item.icon}
            title={item.title}
            descr={item.descr}
          />
        ))}
      </div>
    </div>
  );
};

export default OurAdvantage;
