import SaleItem from './SaleItem';

const SaleLayout = ({ data, type }) => {
  return (
    <div className='w-3/4 grid grid-cols-3 gap-3 mt-4 mb-4'>
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
        />
      ))}
    </div>
  );
};

export default SaleLayout;
