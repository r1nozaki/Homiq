import { FaQuoteLeft } from 'react-icons/fa';
import { ImStarFull, ImStarHalf, ImStarEmpty } from 'react-icons/im';

const ReviewCard = ({ ava, name, surname, stars, review, date }) => {
  const renderStars = stars => {
    switch (stars) {
      case 'star-0':
        return (
          <>
            <ImStarEmpty />
            <ImStarEmpty />
            <ImStarEmpty />
            <ImStarEmpty />
            <ImStarEmpty />
          </>
        );
      case 'star-0.5':
        return (
          <>
            <ImStarHalf />
            <ImStarEmpty />
            <ImStarEmpty />
            <ImStarEmpty />
            <ImStarEmpty />
          </>
        );
      case 'star-1':
        return (
          <>
            <ImStarFull />
            <ImStarEmpty />
            <ImStarEmpty />
            <ImStarEmpty />
            <ImStarEmpty />
          </>
        );
      case 'star-1.5':
        return (
          <>
            <ImStarFull />
            <ImStarHalf />
            <ImStarEmpty />
            <ImStarEmpty />
            <ImStarEmpty />
          </>
        );
      case 'star-2':
        return (
          <>
            <ImStarFull />
            <ImStarFull />
            <ImStarEmpty />
            <ImStarEmpty />
            <ImStarEmpty />
          </>
        );
      case 'star-2.5':
        return (
          <>
            <ImStarFull />
            <ImStarFull />
            <ImStarHalf />
            <ImStarEmpty />
            <ImStarEmpty />
          </>
        );
      case 'star-3':
        return (
          <>
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarEmpty />
            <ImStarEmpty />
          </>
        );
      case 'star-3.5':
        return (
          <>
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarHalf />
            <ImStarEmpty />
          </>
        );
      case 'star-4':
        return (
          <>
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarEmpty />
          </>
        );
      case 'star-4.5':
        return (
          <>
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarHalf />
          </>
        );
      case 'star-5':
        return (
          <>
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
          </>
        );
      default:
        return null;
    }
  };

  const formatDateToText = dateInput => {
    const dateObj = new Date(dateInput);
    return dateObj.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className='border border-[#DEDCDA] w-94 h-87.5 p-6 transition-all duration-300 hover:shadow-xl hover:border-[#69B99D] hover:scale-105'>
      <FaQuoteLeft size={42} className='text-gray-100' />
      <div className='flex mt-4 gap-3 '>
        <div
          className={`w-12 h-12 rounded-full bg-green-400 text-white text-center text-lg font-bold ${
            ava === null ? 'pt-2' : ''
          }`}
        >
          {ava === null ? (
            `${name.charAt(0)}${surname.charAt(0)}`
          ) : (
            <img src={ava} alt={name} className='w-12 h-12 rounded-full object-cover' />
          )}
        </div>
        <div className='flex flex-col text-lg'>
          <span>{name}</span>
          <span>{surname}</span>
        </div>
      </div>
      <div className='mt-3 min-h-24'>
        <p>{review}</p>
      </div>
      <div className='text-yellow-300 flex gap-1 mt-3'>{renderStars(stars)}</div>
      <div className='mt-3'>
        <span>{formatDateToText(date)}</span>
      </div>
    </div>
  );
};

export default ReviewCard;
