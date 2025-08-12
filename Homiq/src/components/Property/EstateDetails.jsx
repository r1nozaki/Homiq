import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toggleFavorite, isInFavorites } from '../../utils/estateFavoriteUtils';
import { Title, Meta } from 'react-head';
import { useTheme } from '../../context/ThemeContext';
import ImageSlider from '../ImageSlider';
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
import ErrorMessage from '../ErrorMessage';
import Notification from '../Notification';
import SaleData from '../../data/SaleRealEstateData';
import RentData from '../../data/RentRealEstateData';
import Bankid from '../../assets/Bankid.png';

const EstateDetails = () => {
  const { id, type } = useParams();
  const { darkMode } = useTheme();
  const data = type === 'sale' ? SaleData : RentData;
  const estate = data.find(item => String(item.id) === id);

  if (!estate) {
    return <div className='text-center text-xl mt-20'>🏠 Not found matches</div>;
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
    Realtor,
    heatingSystem,
    yearofConstruction,
    wallType,
  } = estate;

  const [favourite, setFavourite] = useState(false);
  const [linkNotification, setLinkNotification] = useState(false);
  const [favNotification, setFavNotification] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setFavourite(isInFavorites(id, type));
  }, [id, type]);

  const handleFavourite = () => {
    const newFav = toggleFavorite(estate, type);
    setFavourite(newFav);
    if (newFav) {
      setFavNotification(true);
      setTimeout(() => setFavNotification(false), 2000);
    }
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        setLinkNotification(true);
        setTimeout(() => {
          setLinkNotification(false);
        }, 2000);
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <>
      <Title>{address}</Title>
      <Meta name='description' content='Page about the selected real estate' />
      <section className='mx-5 md:mx-10 px-2 md:px-6 flex flex-col md:flex-row gap-5 relative justify-center'>
        <div className=' w-full gap-5 my-10 md:max-w-248'>
          <div className='w-full md:w-248'>
            <ImageSlider images={images} />
          </div>

          <div className='mt-10'>
            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3'>
              <h2 className='text-2xl font-bold mr-3'>${price}</h2>
              <span className='text-sm text-gray-400 '>{pricePerSquare} $/м²</span>
            </div>
            <div className='mt-2'>
              <span className='text-lg'>{address}</span>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4'>
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
            className='flex items-center gap-3 font-medium text-lg mt-10 hover:underline'
          >
            <FaArrowLeftLong size={24} /> Back to list
          </Link>
        </div>

        <div
          className={`w-full  md:w-96 h-65 rounded-lg sticky top-4 ${
            darkMode ? 'bg-gray-800' : 'bg-gray-100 '
          } p-5 my-10`}
        >
          <div className='flex items-center justify-between'>
            <div>
              <span className='text-2xl font-bold mr-3'>${price}</span>
              <span className={`text-sm  ${darkMode ? 'text-white' : 'text-gray-700'}`}>
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
          </div>

          <div className='mt-2'>
            <span className='text-lg'>{address}</span>
          </div>

          <div className='flex gap-2 mt-2'>
            <img
              loading='lazy'
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
            <img
              loading='lazy'
              src={Bankid}
              alt='Verified person'
              className='w-20 h-10'
            />
          </div>

          <a
            href={`tel:${Realtor.phone}`}
            className='w-full h-12 bg-green-400 rounded-lg flex items-center justify-center gap-2 hover:bg-green-500'
          >
            <FaPhoneAlt size={20} className='text-white' />
            <span className='text-white text-lg font-semibold'>{Realtor.phone}</span>
          </a>
        </div>
        {linkNotification && (
          <Notification notification={linkNotification} text={'Link copied!'} />
        )}
        {favNotification && (
          <Notification notification={favNotification} text={'Added to favorites!'} />
        )}
        {error && <ErrorMessage error={error} text={'Link failed to copy!'} />}
      </section>
    </>
  );
};

export default EstateDetails;
