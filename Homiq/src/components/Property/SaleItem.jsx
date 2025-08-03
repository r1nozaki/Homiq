import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { toggleFavorite, isInFavorites } from '../../utils/estateFavoriteUtils';

import { FaHeart, FaRegHeart, FaBed, FaExpand, FaPaintRoller } from 'react-icons/fa6';
import { MdOutlineStairs } from 'react-icons/md';
import { useTheme } from '../../context/ThemeContext';

const SaleItem = ({
  id,
  price,
  address,
  description,
  pricePerSquare,
  countRooms,
  isRenovation,
  area,
  currentFloor,
  totalFloor,
  images,
  type,
  onToggleFavorite,
  showNotification,
}) => {
  const [favourite, setFavourite] = useState(false);
  const { darkMode } = useTheme();

  const estate = useMemo(
    () => ({
      id,
      price,
      address,
      description,
      pricePerSquare,
      countRooms,
      isRenovation,
      area,
      currentFloor,
      totalFloor,
      images,
      type,
      onToggleFavorite,
      showNotification,
    }),
    [
      id,
      price,
      address,
      description,
      pricePerSquare,
      countRooms,
      isRenovation,
      area,
      currentFloor,
      totalFloor,
      images,
      type,
      onToggleFavorite,
      showNotification,
    ]
  );

  useEffect(() => {
    setFavourite(isInFavorites(id, 'sale'));
  }, [id]);

  const handleFavourite = () => {
    const newFav = toggleFavorite(estate, type);
    setFavourite(newFav);
    if (onToggleFavorite) {
      onToggleFavorite();
    }

    if (showNotification && newFav) {
      showNotification();
    }
  };

  return (
    <div className={`w-87 max-h-165 border flex flex-col rounded-lg p-2 transition-colors duration-300 ${
      darkMode 
        ? 'border-green-400 bg-gray-800' 
        : 'border-[#4CAF50] bg-white'
    }`}>
      <div className='relative'>
        {favourite ? (
          <FaHeart
            className='absolute top-3 right-3 text-red-500 cursor-pointer'
            onClick={handleFavourite}
            size={20}
          />
        ) : (
          <FaRegHeart
            className={`absolute top-3 right-3 cursor-pointer transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-black'
            }`}
            onClick={handleFavourite}
            size={20}
          />
        )}
        <img src={images[0]} alt='Sale Property' className='rounded-md select-none' />
      </div>
      <div>
        <div className='flex gap-2 items-center mt-3'>
          <span className={`text-xl font-bold transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-black'
          }`}>$ {price}</span>
          <span className='text-xs text-gray-400'>{pricePerSquare} $/m²</span>
        </div>
        <div className='mt-1'>
          <span className={`text-lg font-medium transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-black'
          }`}>{address}</span>
        </div>
        <div className='mt-1 mb-3 h-18'>
          <p className={`transition-colors duration-300 ${
            darkMode ? 'text-gray-300' : 'text-black'
          }`}>{description.slice(0, 101)}...</p>
        </div>
        <div className='grid grid-cols-2 gap-2 items-center'>
          <div className='flex gap-2 items-center'>
            <FaBed size={20} className={`transition-colors duration-300 ${
              darkMode ? 'text-gray-300' : 'text-black'
            }`} />
            <span className={`text-sm transition-colors duration-300 ${
              darkMode ? 'text-gray-300' : 'text-black'
            }`}>{countRooms}</span>
          </div>
          <div className='flex gap-2 items-center'>
            <FaPaintRoller size={20} className={`transition-colors duration-300 ${
              darkMode ? 'text-gray-300' : 'text-black'
            }`} />
            <span className={`text-sm transition-colors duration-300 ${
              darkMode ? 'text-gray-300' : 'text-black'
            }`}>
              {isRenovation ? 'With Renovation' : 'Without Renovation'}
            </span>
          </div>
          <div className='flex gap-2 items-center'>
            <FaExpand size={20} className={`transition-colors duration-300 ${
              darkMode ? 'text-gray-300' : 'text-black'
            }`} />
            <span className={`text-sm transition-colors duration-300 ${
              darkMode ? 'text-gray-300' : 'text-black'
            }`}>{area} m²</span>
          </div>
          <div className='flex gap-2 items-center'>
            <MdOutlineStairs size={25} className={`transition-colors duration-300 ${
              darkMode ? 'text-gray-300' : 'text-black'
            }`} />
            <span className={`text-sm transition-colors duration-300 ${
              darkMode ? 'text-gray-300' : 'text-black'
            }`}>
              Floor {currentFloor} of {totalFloor}
            </span>
          </div>
        </div>
        <Link
          to={`/${type}/${id}`}
          className='mx-auto my-10 block bg-[#4CAF50] text-white rounded-full font-medium hover:bg-[#3e8e41] cursor-pointer w-1/2 h-10 transition duration-300 ease-in-out transform hover:scale-105 text-center pt-2'
        >
          Show More
        </Link>
      </div>
    </div>
  );
};

export default SaleItem;
