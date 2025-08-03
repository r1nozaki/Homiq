import LifestyleCard from './LifestyleCard';
import {
  IvanoFrankivskMain,
  VinnytsiaMain,
  ChernivtsiMain,
  TranqulityGallery1,
  TranqulityGallery2,
  TranqulityGallery3,
  TranqulityGallery4,
  TranqulityGallery5,
  TranqulityGallery6,
} from '../../assets/Lifestyle/LifestyleImg';

const tranquilityData = [
  {
    img: IvanoFrankivskMain,
    title: 'Ivano-Frankivsk',
    descr:
      "A compact, eco-friendly city with a mountain vibe and a vibrant IT scene. It's easy to combine work, nature, and tranquility here.",
    star: 'star-5',
  },
  {
    img: VinnytsiaMain,
    title: 'Vinnytsia',
    descr:
      'One of the most comfortable cities in Ukraine with well-designed infrastructure, clean streets, and stable development. A balance for life and work.',
    star: 'star-5',
  },
  {
    img: ChernivtsiMain,
    title: 'Chernivtsi',
    descr:
      'A city with a European soul and rich cultural heritage. Quiet, cozy, ideal for a harmonious family life.',
    star: 'star-4',
  },
];

const TranquilityLayout = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row md:gap-10 gap-6 items-center justify-center flex-wrap'>
        {tranquilityData.map((item, index) => (
          <LifestyleCard
            key={index}
            img={item.img}
            title={item.title}
            descr={item.descr}
            star={item.star}
          />
        ))}
      </div>

      <div className='mt-10'>
        <h2 className='text-left text-3xl font-bold'>Photo Gallery</h2>
        <div className='shadow-md w-full mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-3'>
          <img
            loading='lazy'
            src={TranqulityGallery1}
            alt='TranqulityGallery1'
            className='w-full h-45 sm:h-50 object-cover rounded-lg'
          />
          <img
            loading='lazy'
            src={TranqulityGallery2}
            alt='TranqulityGallery2'
            className='w-full h-45 sm:h-50 object-cover rounded-lg'
          />
          <img
            loading='lazy'
            src={TranqulityGallery3}
            alt='TranqulityGallery3'
            className='w-full h-45 sm:h-50 object-cover rounded-lg'
          />
          <img
            loading='lazy'
            src={TranqulityGallery4}
            alt='TranqulityGallery4'
            className='w-full h-45 sm:h-50 object-cover rounded-lg'
          />
          <img
            loading='lazy'
            src={TranqulityGallery5}
            alt='TranqulityGallery5'
            className='w-full h-45 sm:h-50 object-cover rounded-lg'
          />
          <img
            loading='lazy'
            src={TranqulityGallery6}
            alt='TranqulityGallery6'
            className='w-full h-45 sm:h-50 object-cover rounded-lg'
          />
        </div>
      </div>
    </div>
  );
};

export default TranquilityLayout;
