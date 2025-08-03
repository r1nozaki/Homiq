import LifestyleCard from './LifestyleCard';
import {
  KyivMain,
  LvivMain,
  DniproMain,
  FamilyGallery1,
  FamilyGallery2,
  FamilyGallery3,
  FamilyGallery4,
  FamilyGallery5,
  FamilyGallery6,
} from '../../assets/Lifestyle/LifestyleImg';

const fammilyData = [
  {
    img: KyivMain,
    title: 'Kyiv',
    descr:
      'The capital of Ukraine with a dynamic rhythm, modern infrastructure, and a majestic history. Suitable for both business and comfortable living.',
    star: 'star-5',
  },
  {
    img: LvivMain,
    title: 'Lviv',
    descr:
      'A city with a European atmosphere, narrow streets, and coffee culture. An ideal place for creative people and lovers of peace and quiet.',
    star: 'star-4.5',
  },
  {
    img: DniproMain,
    title: 'Dnipro',
    descr:
      'A modern city on the banks of the Dnieper River with a developed IT sector, wide avenues, and an active lifestyle.',
    star: 'star-4',
  },
];

const FamilyLayout = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row md:gap-10 gap-6 items-center justify-center flex-wrap'>
        {fammilyData.map((item, index) => (
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
            src={FamilyGallery1}
            alt='FamilyGallery1'
            className='w-full h-45 sm:h-50 object-cover rounded-lg'
          />
          <img
            loading='lazy'
            src={FamilyGallery2}
            alt='FamilyGallery2'
            className='w-full h-45 sm:h-50 object-cover rounded-lg'
          />
          <img
            loading='lazy'
            src={FamilyGallery3}
            alt='FamilyGallery3'
            className='w-full h-45 sm:h-50 object-cover rounded-lg'
          />
          <img
            loading='lazy'
            src={FamilyGallery4}
            alt='FamilyGallery4'
            className='w-full h-45 sm:h-50 object-cover rounded-lg'
          />
          <img
            loading='lazy'
            src={FamilyGallery5}
            alt='FamilyGallery5'
            className='w-full h-45 sm:h-50 object-cover rounded-lg'
          />
          <img
            loading='lazy'
            src={FamilyGallery6}
            alt='FamilyGallery6'
            className='w-full h-45 sm:h-50 object-cover rounded-lg'
          />
        </div>
      </div>
    </div>
  );
};

export default FamilyLayout;
