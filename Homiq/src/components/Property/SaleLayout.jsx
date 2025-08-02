import SaleItem from './SaleItem';

const SaleLayout = ({ data, type, showNotification }) => {
  return (
    <div className='md:w-3/4 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:mt-4 mb-4 '>
      {data.map(item => (
        <SaleItem
          key={item.id}
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
          type={type}
          showNotification={showNotification}
        />
      ))}
    </div>
  );
};

export default SaleLayout;
