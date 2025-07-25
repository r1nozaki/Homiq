import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { getFavorites } from '../utils/estateFavoriteUtils';

import { FaHeart } from 'react-icons/fa';
import SaleItem from './Property/SaleItem';
import RentItem from './Property/RentItem';

const Favorite = () => {
  const [favorite, setFavorite] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const data = getFavorites();
      setFavorite(data);
      setLoading(false);
    }, 1000);
  }, []);

  const refreshFavorites = () => {
    const data = getFavorites();
    setFavorite(data);
  };

  if (loading) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <FaHeart className='text-green-500 text-6xl animate-ping' />
      </div>
    );
  }

  if (favorite.length === 0) {
    return (
      <div className='text-center text-[#1e3a1e] text-2xl mt-10  min-h-screen'>
        You have no saved ads.
      </div>
    );
  }

  return (
    <div className='pt-3 min-h-screen'>
      <div className='w-full px-10 grid grid-cols-4 gap-10 '>
        <AnimatePresence>
          {favorite.map(item => {
            const motionKey = `${item.type}-${item.id}`;
            const MotionWrapper = ({ children }) => (
              <motion.div
                key={motionKey}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                {children}
              </motion.div>
            );

            if (item.type === 'sale') {
              return (
                <MotionWrapper key={motionKey}>
                  <SaleItem
                    id={item.id}
                    price={item.price}
                    address={item.address}
                    description={item.description}
                    pricePerSquare={item.pricePerSquare}
                    countRooms={item.countRooms}
                    isRenovation={item.isRenovation}
                    area={item.area}
                    currentFloor={item.currentFloor}
                    totalFloor={item.totalFloor}
                    images={item.images}
                    isFavourite={item.isFavourite}
                    type='sale'
                    onToggleFavorite={refreshFavorites}
                  />
                </MotionWrapper>
              );
            } else if (item.type === 'rent') {
              return (
                <MotionWrapper key={motionKey}>
                  <RentItem
                    id={item.id}
                    price={item.price}
                    address={item.address}
                    description={item.description}
                    pricePerSquare={item.pricePerSquare}
                    countRooms={item.countRooms}
                    isRenovation={item.isRenovation}
                    area={item.area}
                    currentFloor={item.currentFloor}
                    totalFloor={item.totalFloor}
                    images={item.images}
                    isFavourite={item.isFavourite}
                    type='rent'
                    onToggleFavorite={refreshFavorites}
                  />
                </MotionWrapper>
              );
            } else {
              return null;
            }
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Favorite;
