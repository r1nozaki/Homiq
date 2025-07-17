import { useParams, Link } from 'react-router';
import { useState } from 'react';

import ImageSlider from './ImageSlider';
import {
  FaShareAlt,
  FaHeart,
  FaRegHeart,
  FaPhoneAlt,
  FaBed,
  FaExpand,
  FaRegCalendarCheck,
} from 'react-icons/fa';
import { PiWall } from 'react-icons/pi';
import { MdOutlineStairs } from 'react-icons/md';
import { TbAirConditioning } from 'react-icons/tb';
import { FaArrowLeftLong } from 'react-icons/fa6';
import Header from './Header';
import ErrorMessage from './ErrorMessage';
import Notification from './Notification';
import SaleData from '../data/SaleRealEstateData';
import RentData from '../data/RentRealEstateData';
import bankid from '../assets/bankid.png';

const EstateDetails = () => {
  const { id, type } = useParams();

  const data = type === 'sale' ? SaleData : RentData;
  const estate = data.find(item => String(item.id) === id);

  if (!estate) {
    return (
      <>
        <Header />
        <div className='text-center text-xl mt-20'>🏠 Об'єкт не знайдено</div>
      </>
    );
  }

  const {
    price,
    address,
    description,
    area,
    countRooms,
    currentFloor,
    totalFloor,
    images,
    pricePerSquare,
    isFavourite,
    Realtor,
    heatingSystem,
    yearofConstruction,
    wallType,
  } = estate;

  const [favourite, setFavourite] = useState(isFavourite);
  const [notification, setNotification] = useState(false);
  const [error, setError] = useState(false);
  const handleFavourite = () => {
    setFavourite(!favourite);
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        setNotification(true);
        setTimeout(() => {
          setNotification(false);
        }, 2000);
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <>
      <Header />
      <section className=' mx-10 px-6 flex gap-5 relative'>
        <div className=' gap-5 my-10 max-w-248'>
          <div className='w-248'>
            <ImageSlider images={images} />
          </div>

          <div className='mt-10'>
            <div className='flex items-center gap-3'>
              <h2 className='text-2xl font-bold mr-3'>${price}</h2>
              <span className='text-sm text-gray-400 '>{pricePerSquare} $/м²</span>
            </div>
            <div className='mt-2'>
              <span className='text-lg'>{address}</span>
            </div>
            <div className='grid grid-cols-3 gap-4 mt-2'>
              <span className='flex items-center gap-3'>
                <FaBed size={20} /> {countRooms}
              </span>
              <span className='flex items-center gap-3'>
                <FaExpand size={20} /> {area} м²
              </span>
              <span className='flex items-center gap-3'>
                <MdOutlineStairs size={20} /> Floor {currentFloor} of {totalFloor}
              </span>
              <span className='flex items-center gap-3'>
                <TbAirConditioning size={20} /> {heatingSystem}
              </span>
              <span className='flex items-center gap-3'>
                <FaRegCalendarCheck size={20} /> {yearofConstruction} year of construction
              </span>
              <span className='flex items-center gap-3'>
                <PiWall size={20} /> {wallType}
              </span>
            </div>
          </div>

          <div>
            <h2 className='font-semibold text-2xl mt-10'>Description</h2>
            <p>{description}</p>
          </div>

          <Link
            to='/property'
            className='flex items-center gap-3 font-medium text-lg mt-10'
          >
            <FaArrowLeftLong size={24} /> Back to list
          </Link>
        </div>
        <div className='w-96 h-65 rounded-lg sticky top-4 bg-gray-100 p-5 my-10'>
          <div className='flex items-center justify-between'>
            <div>
              <span className='text-2xl font-bold mr-3'>${price}</span>
              <span className='text-ssize={20}m text-gray-700 '>
                {pricePerSquare} $/м²
              </span>
            </div>
            <div className='flex gap-4'>
              <button className='cursor-pointer' onClick={handleCopy}>
                <FaShareAlt size={24} />
              </button>
              <button className='cursor-pointer' onClick={handleFavourite}>
                {favourite ? (
                  <FaHeart size={24} className='text-red-500' />
                ) : (
                  <FaRegHeart size={24} />
                )}
              </button>
            </div>
            <div></div>
          </div>

          <div className='mt-2'>
            <span className='text-lg'>{address}</span>
          </div>

          <div className='flex gap-2 mt-2'>
            <img
              src={Realtor.ava}
              alt={Realtor.name}
              className='w-13 h-13 rounded-full'
            />
            <div className='flex flex-col'>
              <span>{Realtor.name}</span>
              <span className='font-semibold'>Realtor</span>
            </div>
          </div>

          <div className='flex items-center'>
            <span>Verified person</span>
            <img src={bankid} alt='Verified person' className='w-20 h-10' />
          </div>

          <a
            href={`tel:${Realtor.phone}`}
            className='w-full h-12 bg-green-400 rounded-lg flex items-center justify-center gap-2 hover:bg-green-500'
          >
            <FaPhoneAlt size={20} className='text-white' />
            <span className='text-white text-lg font-semibold'>{Realtor.phone}</span>
          </a>
        </div>
        {notification && (
          <Notification notification={notification} text={'Link copied!'} />
        )}
        {error && <ErrorMessage error={error} text={'Link failed to copy!'} />}
      </section>
    </>
  );
};

export default EstateDetails;
