import { useState, useEffect } from 'react';
import RentRealEstateData from '../data/RentRealEstateData';
import SaleRealEstateData from '../data/SaleRealEstateData';

const roomOptions = ['1', '2', '3', '4+'];

const Filters = () => {
  const [filters, setFilters] = useState({
    price: { min: '', max: '' },
    area: { min: '', max: '' },
    pricePerSquare: '',
    rooms: [],
    isRenovation: true,
  });

  const [filteredData, setFilteredData] = useState([]);

  const getSourceData = () => (type === 'rent' ? RentRealEstateData : SaleRealEstateData);

  return (
    <div className='w-1/4  rounded-2xl shadow-2xl h-500 mx-2 mt-4 p-5'>
      <h2 className='font-semibold text-green-500 text-2xl '>Filters</h2>
      <div className='mt-3'>
        <label htmlFor='price' className='text-lg '>
          Price
        </label>
        <div className='flex gap-4 mt-1 mb-3'>
          <input
            type='text'
            placeholder='Min'
            name='price'
            className='border border-gray-400 rounded-lg py-2 px-2 w-40'
          />

          <input
            type='text'
            placeholder='Max'
            name='price'
            className='border border-gray-400 rounded-lg py-2 px-2 w-40'
          />
        </div>
        <label htmlFor='pricePerSquare' className='text-lg'>
          Price per Square Meter
        </label>
        <div className='mt-1 mb-3'>
          <select
            name='pricePerSquare'
            className='border border-gray-400 rounded-lg w-full py-2'
          >
            <option value=''>Any</option>
            <option value='500'>Up to $500/m²</option>
            <option value='1000'>Up to $1,000/m²</option>
            <option value='1500'>Up to $1,500/m²</option>
            <option value='2000'>Up to $2,000/m²</option>
            <option value='3000'>Up to $3,000/m²</option>
            <option value='5000'>Up to $5,000/m²</option>
          </select>
        </div>
        <label htmlFor='rooms' className='text-lg'>
          Rooms
        </label>
        <div className='flex flex-wrap gap-2 mt-1 mb-3'>
          {roomOptions.map(room => (
            <button
              key={room}
              className={`px-4 py-2 rounded-lg border ${
                filters.rooms.includes(room)
                  ? 'bg-green-500 text-white border-green-500'
                  : 'border-gray-300 hover:bg-gray-100 cursor-pointer'
              } transition-colors`}
            >
              {room}
            </button>
          ))}
        </div>
        <label htmlFor='area' className='text-lg '>
          Area
        </label>
        <div className='flex gap-4 mt-1 mb-3'>
          <input
            type='text'
            placeholder='Min'
            name='area'
            className='border border-gray-400 rounded-lg py-2 px-2 w-40'
          />

          <input
            type='text'
            placeholder='Max'
            name='area'
            className='border border-gray-400 rounded-lg py-2 px-2 w-40'
          />
        </div>
        <label htmlFor='renovation' className='text-lg'>
          Renovation
        </label>
        <div className='flex gap-2 mt-1'>
          <button
            onClick={() => setFilters(prev => ({ ...prev, isRenovation: true }))}
            className={`px-4 py-2 rounded-lg border ${
              filters.isRenovation
                ? 'bg-green-500 text-white border-green-500'
                : 'border-gray-300 hover:bg-gray-100 cursor-pointer'
            }`}
          >
            With renovation
          </button>
          <button
            onClick={() => setFilters(prev => ({ ...prev, isRenovation: false }))}
            className={`px-4 py-2 rounded-lg border ${
              filters.isRenovation === false
                ? 'bg-green-500 text-white border-green-500'
                : 'border-gray-300 hover:bg-gray-100 cursor-pointer'
            }`}
          >
            Without renovation
          </button>
        </div>
        <div className='mt-10 ml-8 flex gap-4'>
          <button className=' text-black border border-gray-400 rounded-lg w-30 h-10 cursor-pointer hover:'>
            Clear
          </button>
          <button className='bg-green-400 text-white rounded-lg w-30 h-10 cursor-pointer hover:bg-green-500'>
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
