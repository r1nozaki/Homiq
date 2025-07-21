import { Link } from 'react-router-dom';
import FuzzyText from '../components/FuzzyText';

const Page404 = () => {
  return (
    <div
      className='min-h-screen flex flex-col justify-center items-center bg-white text-center gap-2 bg-gradient-to-br from-gray-900 to-gray-700'
      style={{
        backgroundImage:
          "url('https://images.wallpaperscraft.ru/image/single/doma_zdaniia_ogni_963415_1920x1080.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <FuzzyText
        baseIntensity={0.3}
        hoverIntensity={0.5}
        enableHover={true}
        color='#fff'
        fontSize='10rem'
      >
        404
      </FuzzyText>
      <FuzzyText
        baseIntensity={0.3}
        hoverIntensity={0.5}
        enableHover={true}
        color='#fff'
        fontSize='5rem'
      >
        not found
      </FuzzyText>

      <Link
        to='/home'
        className=' border border-white rounded-lg mt-6 text-white p-3 transition duration-300 easy-in-out transform hover:scale-105 '
      >
        Back to Homepage
      </Link>
    </div>
  );
};

export default Page404;
