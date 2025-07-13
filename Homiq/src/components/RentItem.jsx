import { useState } from 'react';

import { FaHeart, FaRegHeart, FaBed, FaExpand, FaPaintRoller } from 'react-icons/fa6';
import { MdOutlineStairs } from 'react-icons/md';

const RentItem = ({
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
  isFavourite,
}) => {
  const [favourite, setFavourite] = useState(isFavourite);

  const handleFavourite = () => {
    setFavourite(!favourite);
  };

  return (
    <div className='w-87 h-165 border border-[#4CAF50] flex flex-col rounded-lg p-2'>
      <div className='relative'>
        {favourite ? (
          <FaHeart
            className='absolute top-3 right-3 text-red-500 cursor-pointer'
            onClick={handleFavourite}
            size={20}
          />
        ) : (
          <FaRegHeart
            className='absolute top-3 right-3 text-black cursor-pointer'
            onClick={handleFavourite}
            size={20}
          />
        )}
        <img src={images[0]} alt='Sale Property' className='rounded-md select-none' />
      </div>
      <div>
        <div className='flex gap-2 items-center mt-3'>
          <span className='text-xl text-black font-bold'>$ {price}</span>
          <span className='text-xs text-gray-400'>{pricePerSquare} $/m²</span>
        </div>
        <div className='mt-1'>
          <span className='text-lg font-medium'>{address}</span>
        </div>
        <div className='mt-1 mb-3 h-18'>
          <p>{description.slice(0, 101)}...</p>
        </div>
        <div className='grid grid-cols-2 gap-2 items-center'>
          <div className='flex gap-2 items-center'>
            <FaBed size={20} />
            <span className='text-sm'>{countRooms}</span>
          </div>
          <div className='flex gap-2 items-center'>
            <FaPaintRoller size={20} />
            <span className='text-sm'>
              {isRenovation ? 'With Renovation' : 'Without Renovation'}
            </span>
          </div>
          <div className='flex gap-2 items-center'>
            <FaExpand size={20} />
            <span className='text-sm'>{area} m²</span>
          </div>
          <div className='flex gap-2 items-center'>
            <MdOutlineStairs size={25} />
            <span className='text-sm'>
              Floor {currentFloor} of {totalFloor}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentItem;
