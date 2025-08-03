import { useState, useEffect, useMemo } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Title, Meta } from 'react-head';
import { HashLoader } from 'react-spinners';

import TwoIntroCard from './TwoIntroCard';
import Filters from './Filters';
import SaleLayout from './SaleLayout';
import RentLayout from './RentLayout';
import RentData from '../../data/RentRealEstateData';
import SaleData from '../../data/SaleRealEstateData';
import applyFilters from '../../utils/filtersUtils';
import Notification from '../Notification';
const RealEstateAssortiment = () => {
  const emptyFilters = {
    price: { min: '', max: '' },
    area: { min: '', max: '' },
    pricePerSquare: '',
    rooms: [],
    isRenovation: null,
  };

  const [type, setType] = useState(null);
  const [notification, setNotification] = useState(false);
  const [loading, setLoading] = useState(false);
  const [draftFilters, setDraftFilters] = useState(emptyFilters);
  const [filters, setFilters] = useState(emptyFilters);
  const [openFilter, setOpenFilter] = useState(false);
  const { darkMode } = useTheme();

  useEffect(() => {
    const savedType = localStorage.getItem('estateType');
    if (savedType) {
      setType(savedType);
    }
  }, []);

  useEffect(() => {
    setDraftFilters(emptyFilters);
    setFilters(emptyFilters);

    if (type) {
      localStorage.setItem('estateType', type);
    }
  }, [type]);

  const showNotification = () => {
    setNotification(true);
    setTimeout(() => setNotification(false), 2000);
  };

  const filteredData = useMemo(() => {
    const data = type === 'rent' ? RentData : SaleData;
    return applyFilters(data, filters);
  }, [type, filters]);

  const showContent = loading ? (
    <HashLoader className='block mx-auto my-20' color='#4CAF50' />
  ) : type === null ? (
    <div className='text-center font-bold text-4xl md:text-7xl mx-auto my-20 w-1/2 text-[#1e3a1e]'>
      Choose from rent or sale above
    </div>
  ) : filteredData.length === 0 ? (
    <div className='text-center font-bold text-2xl md:text-4xl mx-auto my-20 text-[#1e3a1e]'>
      🏠 Not found matches
    </div>
  ) : type === 'sale' ? (
    <SaleLayout data={filteredData} type='sale' showNotification={showNotification} />
  ) : (
    <RentLayout data={filteredData} type='rent' showNotification={showNotification} />
  );

  const handleSetType = selectedType => {
    setLoading(true);
    setTimeout(() => {
      setType(selectedType);
      setLoading(false);
    }, 400);
  };

  return (
    <>
      <Title>Property</Title>
      <Meta name='description' content='Real estate property' />

      <div
        className={`${
          darkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-[#F5FFF5] to-[#E8F5E9]'
        } flex flex-col justify-center gap-8 h-auto p-8`}
      >
        <TwoIntroCard handleSetType={handleSetType} />
        <button
          onClick={() => setOpenFilter(!openFilter)}
          className='md:hidden block w-30 h-10 mx-auto bg-green-400 rounded-lg text-white '
        >
          Filter
        </button>
      </div>

      <div
        className={`relative ${
          darkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-[#E8F5E9] to-[#F5FFF5]'
        }  w-full md:flex md:gap-3 md:pl-0 pl-5`}
      >
        {openFilter && (
          <div
            className='fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden'
            onClick={() => setOpenFilter(false)}
          />
        )}

        <Filters
          type={type}
          filters={draftFilters}
          openFilter={openFilter}
          onChange={setDraftFilters}
          onApply={() => {
            setFilters(draftFilters);
            setOpenFilter(false);
          }}
          onClear={() => {
            setDraftFilters(emptyFilters);
            setFilters(emptyFilters);
            setOpenFilter(false);
          }}
        />
        {showContent}
      </div>

      {notification && (
        <Notification notification={notification} text='Added to favorites!' />
      )}
    </>
  );
};

export default RealEstateAssortiment;
