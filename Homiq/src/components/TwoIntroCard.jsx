import SaleCard from '../assets/SaleCard.jpg';
import RentCard from '../assets/RentCard.jpg';

const TwoIntroCard = () => {
  return (
    <>
      <div className='"w-full max-w-sm h-[480px] bg-[#c5ecc9] rounded-xl p-6 flex flex-col items-center ">'>
        <h2 className='font-bold text-[#1e3a1e] text-4xl text-center mb-2'>
          Find Property for Sale
        </h2>
        <p className='text-black text-lg text-center'>
          Search for your dream property from our sale listings
        </p>
        <img src={SaleCard} alt='Classic House' className=' rounded-lg mt-4' />
      </div>
      <div className='"w-full max-w-sm h-[480px] bg-[#c5ecc9] rounded-xl p-6 flex flex-col items-center ">'>
        <h2 className='font-bold text-[#1e3a1e] text-4xl text-center mb-2'>
          Find Property for Rent
        </h2>
        <p className='text-black text-lg text-center'>
          Discover rental properties that suit your needs
        </p>
        <img
          src={RentCard}
          alt='Classic House'
          className=' w-[300px] h-[250px] rounded-lg mt-4'
        />
      </div>
    </>
  );
};

export default TwoIntroCard;
