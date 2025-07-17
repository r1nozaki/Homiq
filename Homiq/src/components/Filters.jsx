const roomOptions = ['1', '2', '3', '4+'];

const Filters = ({ type, filters, onChange, onApply, onClear }) => {
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
    <div className='w-1/4 rounded-2xl shadow-2xl h-300 mx-2 mt-4 p-5'>
      <h2 className='font-semibold text-green-500 text-2xl'>Filters</h2>

      <div className='mt-3'>
        <label className='text-lg'>Price</label>
        <div className='flex gap-4 mt-1 mb-3'>
          <input
            type='text'
            placeholder='Min'
            className='border border-gray-400 rounded-lg py-2 px-2 w-40'
            value={filters.price.min}
            onChange={e => handleNestedChange('price', 'min', e.target.value)}
          />
          <input
            type='text'
            placeholder='Max'
            className='border border-gray-400 rounded-lg py-2 px-2 w-40'
            value={filters.price.max}
            onChange={e => handleNestedChange('price', 'max', e.target.value)}
          />
        </div>

        <label className='text-lg'>Price per Square Meter</label>
        <div className='mt-1 mb-3'>
          <select
            className='border border-gray-400 rounded-lg w-full py-2'
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

        <label className='text-lg'>Rooms</label>
        <div className='flex flex-wrap gap-2 mt-1 mb-3'>
          {roomOptions.map(room => (
            <button
              key={room}
              className={`px-4 py-2 rounded-lg border ${
                filters.rooms.includes(room)
                  ? 'bg-green-500 text-white border-green-500'
                  : 'border-gray-300 hover:bg-gray-200 cursor-pointer'
              } transition-colors`}
              onClick={() => toggleRoom(room)}
            >
              {room}
            </button>
          ))}
        </div>

        <label className='text-lg'>Area</label>
        <div className='flex gap-4 mt-1 mb-3'>
          <input
            type='text'
            placeholder='Min'
            value={filters.area.min}
            className='border border-gray-400 rounded-lg py-2 px-2 w-40'
            onChange={e => handleNestedChange('area', 'min', e.target.value)}
          />
          <input
            type='text'
            placeholder='Max'
            value={filters.area.max}
            className='border border-gray-400 rounded-lg py-2 px-2 w-40'
            onChange={e => handleNestedChange('area', 'max', e.target.value)}
          />
        </div>

        <label className='text-lg'>Renovation</label>
        <div className='flex gap-2 mt-1'>
          <button
            onClick={() => onChange(prev => ({ ...prev, isRenovation: true }))}
            className={`px-4 py-2 rounded-lg border ${
              filters.isRenovation === true
                ? 'bg-green-500 text-white border-green-500'
                : 'border-gray-300 hover:bg-gray-200 cursor-pointer'
            }`}
          >
            With renovation
          </button>
          <button
            onClick={() => onChange(prev => ({ ...prev, isRenovation: false }))}
            className={`px-4 py-2 rounded-lg border ${
              filters.isRenovation === false
                ? 'bg-green-500 text-white border-green-500'
                : 'border-gray-300 hover:bg-gray-200 cursor-pointer'
            }`}
          >
            Without renovation
          </button>
        </div>

        <div className='mt-10 ml-8 flex gap-4'>
          <button
            onClick={onClear}
            className='text-black border border-gray-400 rounded-lg w-30 h-10 cursor-pointer hover:bg-gray-200'
          >
            Clear
          </button>
          <button
            onClick={onApply}
            className='bg-green-400 text-white rounded-lg w-30 h-10 cursor-pointer hover:bg-green-500'
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
