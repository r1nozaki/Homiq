import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const NextArrow = ({ onClick }) => {
  const { darkMode } = useTheme();

  return (
    <button
      className={`hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white w-8 h-8 p-2 rounded-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 ${
        darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-neutral-800 hover:bg-neutral-600'
      }`}
      onClick={onClick}
    >
      <FaAngleRight />
    </button>
  );
};

const PrevArrow = ({ onClick }) => {
  const { darkMode } = useTheme();

  return (
    <button
      className={`hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white w-8 h-8 p-2 rounded-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 ${
        darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-neutral-800 hover:bg-neutral-600'
      }`}
      onClick={onClick}
    >
      <FaAngleLeft />
    </button>
  );
};

const ImageSlider = ({ images }) => {
  const { darkMode } = useTheme();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className='slider-container'>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div
            key={index}
            className={`${darkMode ? 'bg-gray-800 ' : 'bg-gray-300 '} rounded-xl`}
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className='object-contain w-248 h-150'
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
