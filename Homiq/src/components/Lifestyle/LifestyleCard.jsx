import { ImStarFull, ImStarHalf, ImStarEmpty } from 'react-icons/im';

const LifestyleCard = ({ img, title, descr, star }) => {
  const renderStars = star => {
    switch (star) {
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

  return (
    <div className='max-w-sm h-120 shadow-md rounded-lg mt-16'>
      <div>
        <img src={img} alt={title} className='w-full h-65 object-cover rounded-lg' />
      </div>
      <div className='px-6 text-left'>
        <h4 className='mt-3 text-lg font-semibold'>{title}</h4>
        <p className='mt-3 h-24'>{descr}</p>
      </div>
      <div className='flex gap-3 px-6 mt-4'>{renderStars(star)}</div>
    </div>
  );
};

export default LifestyleCard;
