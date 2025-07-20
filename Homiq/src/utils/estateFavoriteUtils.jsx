export const getFavorites = () => {
  const data = localStorage.getItem('favorites');
  try {
    const parsed = JSON.parse(data);
    return Array.isArray(parsed)
      ? parsed.filter(
          item => item && typeof item.id !== 'undefined' && typeof item.type === 'string'
        )
      : [];
  } catch (e) {
    return [];
  }
};

export const isInFavorites = (id, type) => {
  const favorites = getFavorites();
  const strId = String(id);
  return favorites.some(item => String(item.id) === strId && item.type === type);
};

export const toggleFavorite = (estate, type) => {
  const favorites = getFavorites();
  const strId = String(estate.id);
  const exists = favorites.some(item => String(item.id) === strId && item.type === type);

  const updatedFavorites = exists
    ? favorites.filter(item => !(String(item.id) === strId && item.type === type))
    : [...favorites, { ...estate, type }];

  localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  return !exists;
};
