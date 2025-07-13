import RentItem from './RentItem';
import RentData from '../data/RentRealEstateData';

const RentLayout = () => {
  return (
    <div className='w-3/4 grid grid-cols-3 gap-3 mt-4 mb-4'>
      {RentData.map(item => (
        <RentItem
          key={item.id}
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
        />
      ))}
    </div>
  );
};

export default RentLayout;
