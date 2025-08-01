import LifestyleCard from './LifestyleCard';
import {
  KyivMain,
  KharkivMain,
  OdesaMain,
  YoungGallery1,
  YoungGallery2,
  YoungGallery3,
  YoungGallery4,
  YoungGallery5,
  YoungGallery6,
} from '../../assets/Lifestyle/LifestyleImg';

const youngData = [
  {
    img: KyivMain,
    title: 'Kyiv',
    descr:
      'The capital of Ukraine with a dynamic rhythm, modern infrastructure, and a majestic history. Suitable for both business and comfortable living.',
    star: 'star-5',
  },
  {
    img: KharkivMain,
    title: 'Kharkiv',
    descr:
      'An educational and technical hub with a strong IT community. A city of contrasts: intelligence, engineering, and vibrant energy in every neighborhood.',
    star: 'star-4',
  },
  {
    img: OdesaMain,
    title: 'Odesa',
    descr:
      'A city with a vibrant atmosphere, seaside vibe, and dynamic lifestyle. Ideal for those who value creativity, entrepreneurship, and freedom.',
    star: 'star-4.5',
  },
];

const YoungLayout = () => {
  return (
    <div>
      <div className='flex gap-10 items-center'>
        {youngData.map((item, index) => (
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
        <div className='shadow-md w-full h-120 mt-5 grid grid-cols-3 gap-4 p-3'>
          <img
            src={YoungGallery1}
            alt='YoungGallery1'
            className='w-full h-50 object-cover rounded-lg'
          />
          <img
            src={YoungGallery2}
            alt='YoungGallery2'
            className='w-full h-50 object-cover rounded-lg'
          />
          <img
            src={YoungGallery3}
            alt='YoungGallery3'
            className='w-full h-50 object-cover rounded-lg'
          />
          <img
            src={YoungGallery4}
            alt='YoungGallery4'
            className='w-full h-50 object-cover rounded-lg'
          />
          <img
            src={YoungGallery5}
            alt='YoungGallery5'
            className='w-full h-50 object-cover rounded-lg'
          />
          <img
            src={YoungGallery6}
            alt='YoungGallery6'
            className='w-full h-50 object-cover rounded-lg'
          />
        </div>
      </div>
    </div>
  );
};

export default YoungLayout;
