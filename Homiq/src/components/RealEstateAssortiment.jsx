import TwoIntroCard from './TwoIntroCard';
import Filters from './Filters';
import Header from '../components/Header';
import SaleLayout from './SaleLayout';
import RentLayout from './RentLayout';

const RealEstateAssortiment = () => {
  return (
    <>
      <Header />
      <div className='bg-gradient-to-b from-[#F5FFF5] to-[#E8F5E9] flex justify-center gap-8 h-auto p-8'>
        <TwoIntroCard />
      </div>

      <div className='bg-[#F5F5F5] w-full flex gap-3'>
        <Filters />
        <SaleLayout />
      </div>
    </>
  );
};

export default RealEstateAssortiment;
