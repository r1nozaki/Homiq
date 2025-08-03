import SaleCard from '../../assets/SaleCard.jpg';
import RentCard from '../../assets/RentCard.jpg';
import { useTheme } from '../../context/ThemeContext';

const TwoIntroCard = ({ handleSetType }) => {
  const { darkMode } = useTheme();

  return (
    <div className='flex flex-col md:flex-row gap-8 justify-center'>
      <div
        className={`w-full max-w-sm h-[480px] ${
          darkMode ? 'bg-gray-800' : 'bg-white '
        } rounded-xl p-6 flex flex-col items-center border-4 border-[#4CAF50] shadow-sm hover:shadow-md transition-shadow`}
      >
        <h2
          className={`font-bold ${
            darkMode ? 'text-white' : 'text-[#1e3a1e]'
          } text-4xl text-center mb-2`}
        >
          Find Property for Sale
        </h2>
        <p
          className={`${
            darkMode ? 'text-white' : 'text-gray-600'
          } text-lg text-center mb-6`}
        >
          Search for your dream property from our sale listings
        </p>
        <div className='w-[300px] h-[250px] overflow-hidden rounded-lg'>
          <img
            src={SaleCard}
            alt='House for sale'
            className='w-full h-full object-cover select-none'
          />
        </div>
        <button
          className='mt-6 px-8 py-3 bg-[#4CAF50] text-white rounded-full font-medium hover:bg-[#3e8e41] transition-colors cursor-pointer'
          onClick={() => handleSetType('sale')}
        >
          Sale
        </button>
      </div>

      <div
        className={`w-full max-w-sm h-[480px] ${
          darkMode ? 'bg-gray-800' : 'bg-white '
        } rounded-xl p-6 flex flex-col items-center border-4 border-[#4CAF50] shadow-sm hover:shadow-md transition-shadow`}
      >
        <h2
          className={`font-bold ${
            darkMode ? 'text-white' : 'text-[#1e3a1e]'
          } text-4xl text-center mb-2`}
        >
          Find Property for Rent
        </h2>
        <p
          className={`${
            darkMode ? 'text-white' : 'text-gray-600'
          } text-lg text-center mb-6`}
        >
          Discover rental properties that suit your needs
        </p>
        <div className='w-[300px] h-[250px] overflow-hidden rounded-lg'>
          <img
            src={RentCard}
            alt='House for rent'
            className='w-full h-full object-cover select-none'
          />
        </div>
        <button
          className='mt-6 px-8 py-3 bg-[#4CAF50] text-white rounded-full font-medium hover:bg-[#3e8e41] transition-colors cursor-pointer'
          onClick={() => handleSetType('rent')}
        >
          Rent
        </button>
      </div>
    </div>
  );
};

export default TwoIntroCard;
