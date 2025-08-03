import useIsDesktop from '../../hooks/useIsDesktop';
import { useTheme } from '../../context/ThemeContext';
import { IoIosClose } from 'react-icons/io';

const roomOptions = ['1', '2', '3', '4+'];

const Filters = ({ type, filters, onChange, onApply, onClear, openFilter }) => {
  const isDesktop = useIsDesktop();
  const { darkMode } = useTheme();
  if (!type) return null;

  const handleChange = (field, value) => {
    onChange(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNestedChange = (group, field, value) => {
    onChange(prev => ({
      ...prev,
      [group]: {
        ...prev[group],
        [field]: value,
      },
    }));
  };

  const toggleRoom = room => {
    onChange(prev => {
      const rooms = prev.rooms.includes(room)
        ? prev.rooms.filter(r => r !== room)
        : [...prev.rooms, room];
      return { ...prev, rooms };
    });
  };

  return (
    <>
      {(openFilter || isDesktop) && (
        <div
          className={`fixed md:relative inset-x-0 mx-auto top-10 z-50 md:block md:w-1/4 w-[calc(100%-2rem)] rounded-2xl shadow-2xl md:h-300 mt-4 p-5 ${
            darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
          }`}
        >
          <h2 className='font-semibold text-green-500 text-2xl mb-4'>Filters</h2>
          {openFilter ? (
            <button className='absolute top-1 right-1'>
              <IoIosClose
                className={`${darkMode ? 'text-white' : 'text-black'}`}
                size={35}
              />
            </button>
          ) : null}
          <div className='space-y-4'>
            <div>
              <label className='block text-lg mb-1'>Price</label>
              <div className='flex gap-4'>
                <input
                  type='text'
                  placeholder='Min'
                  className={`border rounded-lg py-2 px-3 w-full ${
                    darkMode ? 'bg-gray-700 border-gray-600' : 'border-gray-400'
                  }`}
                  value={filters.price.min}
                  onChange={e => handleNestedChange('price', 'min', e.target.value)}
                />
                <input
                  type='text'
                  placeholder='Max'
                  className={`border rounded-lg py-2 px-3 w-full ${
                    darkMode ? 'bg-gray-700 border-gray-600' : 'border-gray-400'
                  }`}
                  value={filters.price.max}
                  onChange={e => handleNestedChange('price', 'max', e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className='block text-lg mb-1'>Price per Square Meter</label>
              <select
                className={`border rounded-lg w-full py-2 px-3 ${
                  darkMode ? 'bg-gray-700 border-gray-600' : 'border-gray-400'
                }`}
                value={filters.pricePerSquare || ''}
                onChange={e => handleChange('pricePerSquare', e.target.value)}
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

            <div>
              <label className='block text-lg mb-1'>Rooms</label>
              <div className='flex flex-wrap gap-2'>
                {roomOptions.map(room => (
                  <button
                    key={room}
                    className={`px-4 py-2 rounded-lg border transition-colors ${
                      filters.rooms.includes(room)
                        ? 'bg-green-500 text-white border-green-500'
                        : darkMode
                        ? 'border-gray-600 hover:bg-gray-700'
                        : 'border-gray-300 hover:bg-gray-200'
                    }`}
                    onClick={() => toggleRoom(room)}
                  >
                    {room}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className='block text-lg mb-1'>Area</label>
              <div className='flex gap-4'>
                <input
                  type='text'
                  placeholder='Min'
                  value={filters.area.min}
                  className={`border rounded-lg py-2 px-3 w-full ${
                    darkMode ? 'bg-gray-700 border-gray-600' : 'border-gray-400'
                  }`}
                  onChange={e => handleNestedChange('area', 'min', e.target.value)}
                />
                <input
                  type='text'
                  placeholder='Max'
                  value={filters.area.max}
                  className={`border rounded-lg py-2 px-3 w-full ${
                    darkMode ? 'bg-gray-700 border-gray-600' : 'border-gray-400'
                  }`}
                  onChange={e => handleNestedChange('area', 'max', e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className='block text-lg mb-1'>Renovation</label>
              <div className='flex gap-2'>
                <button
                  onClick={() => onChange(prev => ({ ...prev, isRenovation: true }))}
                  className={`px-4 py-2 rounded-lg border transition-colors ${
                    filters.isRenovation === true
                      ? 'bg-green-500 text-white border-green-500'
                      : darkMode
                      ? 'border-gray-600 hover:bg-gray-700'
                      : 'border-gray-300 hover:bg-gray-200'
                  }`}
                >
                  With renovation
                </button>
                <button
                  onClick={() => onChange(prev => ({ ...prev, isRenovation: false }))}
                  className={`px-4 py-2 rounded-lg border transition-colors ${
                    filters.isRenovation === false
                      ? 'bg-green-500 text-white border-green-500'
                      : darkMode
                      ? 'border-gray-600 hover:bg-gray-700'
                      : 'border-gray-300 hover:bg-gray-200'
                  }`}
                >
                  Without renovation
                </button>
              </div>
            </div>

            <div className='pt-6 flex justify-center gap-4'>
              <button
                onClick={onClear}
                className={`px-6 py-2 rounded-lg border ${
                  darkMode
                    ? 'border-gray-600 hover:bg-gray-700'
                    : 'border-gray-400 hover:bg-gray-200'
                } transition-colors`}
              >
                Clear
              </button>
              <button
                onClick={onApply}
                className='px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors'
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Filters;
