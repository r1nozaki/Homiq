const extractNumber = value => {
  if (typeof value !== 'string') return value;
  const lower = value.toLowerCase();
  if (lower.includes('k')) {
    const num = parseFloat(lower.replace(/[^\d.]/g, ''));
    return num * 1000;
  } else if (lower.includes('m')) {
    const num = parseFloat(lower.replace(/[^\d.]/g, ''));
    return num * 1000000;
  }
  return Number(lower.replace(/[^\d.]/g, ''));
};

const extractRoomCount = value => {
  if (typeof value === 'string') {
    const num = parseInt(value);
    return isNaN(num) ? 0 : num;
  }
  return value;
};

const applyFilters = (data, filters) => {
  return data.filter(item => {
    const price = extractNumber(item.price);
    const area = Number(item.area);
    const pricePerSquare = item.pricePerSquare ? Number(item.pricePerSquare) : 0;
    const countRooms = extractRoomCount(item.countRooms);
    const isRenovation = item.isRenovation;

    if (filters.price.min && price < Number(filters.price.min)) return false;
    if (filters.price.max && price > Number(filters.price.max)) return false;

    if (filters.area.min && area < Number(filters.area.min)) return false;
    if (filters.area.max && area > Number(filters.area.max)) return false;

    if (filters.pricePerSquare && pricePerSquare > Number(filters.pricePerSquare))
      return false;

    if (filters.rooms.length > 0) {
      const match = filters.rooms.some(room => {
        if (room === '4+') return countRooms >= 4;
        return countRooms === Number(room);
      });
      if (!match) return false;
    }

    if (filters.isRenovation !== null && filters.isRenovation !== isRenovation)
      return false;

    return true;
  });
};

export default applyFilters;
