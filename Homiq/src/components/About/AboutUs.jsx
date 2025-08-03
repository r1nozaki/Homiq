import { Title, Meta } from 'react-head';
import ScrollToTopBtn from '../ScrollToTopBtn';
import PersonTeamCard from './PersontTeamCard';
import MapComponent from './MapComponent';
import { useTheme } from '../../context/ThemeContext';
import {
  FaPhoneAlt,
  FaRegHeart,
  FaRegCompass,
  FaRegEye,
  FaHome,
  FaWrench,
  FaHandshake,
} from 'react-icons/fa';

import RealtorTeam from '../../assets/RealtorTeam.jpg';
import { Person1, Person2, Person3, Person4 } from '../../assets/avatars/avatars';

const AboutUs = () => {
  const { darkMode } = useTheme();

  const PersonsTeam = [
    {
      ava: Person1,
      name: 'Natalia Shevchenko',
      position: 'CEO',
      socialNetwork: 'https://www.linkedin.com/in/natalia-shevchenko-ceo',
    },
    {
      ava: Person2,
      name: 'Andrii Kovalenko',
      position: 'Agent',
      socialNetwork: 'https://www.linkedin.com/in/andrii-kovalenko-agent',
    },
    {
      ava: Person3,
      name: 'Olena Melnyk',
      position: 'Agent',
      socialNetwork: 'https://www.linkedin.com/in/olena-melnyk-agent',
    },
    {
      ava: Person4,
      name: 'Ivan Bondar',
      position: 'Support',
      socialNetwork: 'https://www.linkedin.com/in/ivan-bondar-support',
    },
  ];

  return (
    <>
      <Title>About Homiq</Title>
      <Meta name='description' content='Page about Homiq' />

      <section
        className={`px-5 md:px-20 pt-20 ${darkMode ? 'bg-gray-900' : 'bg-[#F5F5F5]'}`}
      >
        <div className='flex flex-col md:flex-row gap-10 items-center'>
          <div className='md:w-1/2 w-full text-center md:text-left'>
            <h1 className='font-bold text-5xl md:text-7xl'>Who we are</h1>
            <h2 className='font-medium text-2xl md:text-3xl text-green-500 mt-5'>
              Building trust, one home at a time
            </h2>
            <p className='text-base md:text-lg max-w-115 mt-5'>
              At HOMIQ, we believe everyone deserves a home that reflects their dreams.
              Our mission is to simplify real estate experiences by offering personalized,
              smart, and transparent services.
            </p>
            <a
              href='tel:'
              className='flex gap-3 items-center justify-center w-full md:w-55 text-lg h-10 mt-5 p-5 rounded-lg bg-green-500 text-white transition duration-300 ease-in-out transform hover:scale-105 hover:bg-green-600'
            >
              <FaPhoneAlt /> Contact our team
            </a>
          </div>

          <div className='md:w-1/2 w-full'>
            <img src={RealtorTeam} alt='Realtor Team' className='rounded-3xl w-full' />
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-40 mt-15 pb-10'>
          <div className='text-center md:text-left'>
            <FaRegCompass size={35} className='mx-auto md:mx-0' />
            <h2 className='font-semibold text-2xl mt-2'>Our Mission</h2>
            <p className='text-base mt-2'>Make real estate easy, honest and personal</p>
          </div>
          <div className='text-center md:text-left'>
            <FaRegEye size={35} className='mx-auto md:mx-0' />
            <h2 className='font-semibold text-2xl mt-2'>Our Vision</h2>
            <p className='text-base mt-2'>
              A world where every person finds the perfect home
            </p>
          </div>
          <div className='text-center md:text-left'>
            <FaRegHeart size={35} className='mx-auto md:mx-0' />
            <h2 className='font-semibold text-2xl mt-2'>Our Values</h2>
            <p className='text-base mt-2'>Trust | Innovation | Care</p>
          </div>
        </div>
      </section>

      <section className='px-5 md:px-20 pt-20 pb-20'>
        <h2 className='text-4xl md:text-5xl font-bold text-center md:text-left'>
          Meet our team
        </h2>
        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-40 pl-15 md:pl-0'>
          {PersonsTeam.map((item, index) => (
            <PersonTeamCard
              key={index}
              ava={item.ava}
              name={item.name}
              position={item.position}
              socialNetwork={item.socialNetwork}
            />
          ))}
        </div>
      </section>

      <section className='px-5 md:px-20 pb-10'>
        <h2 className='text-4xl md:text-5xl font-bold text-center md:text-left'>
          What we do
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-40 mt-10'>
          <div className='text-center'>
            <FaHome size={50} className='mx-auto text-green-500' />
            <h2 className='font-semibold text-2xl mt-2'>Property Selection</h2>
            <p className='text-base mt-2'>
              We specialize in helping clients buy, sell, and rent residential and
              commercial properties. From cozy apartments to luxury villas, we ensure
              smooth transactions and legal safety for both parties involved.
            </p>
          </div>
          <div className='text-center'>
            <FaHandshake size={50} className='mx-auto text-green-500' />
            <h2 className='font-semibold text-2xl mt-2'>Consultation</h2>
            <p className='text-base mt-2'>
              Our experts provide accurate property valuations and real estate investment
              consultations. We guide you through market trends, pricing strategies, and
              investment opportunities to make smart property decisions.
            </p>
          </div>
          <div className='text-center'>
            <FaWrench size={50} className='mx-auto text-green-500' />
            <h2 className='font-semibold text-2xl mt-2'>Renovations</h2>
            <p className='text-base mt-2'>
              Beyond transactions, we assist in property renovation planning and legal
              paperwork. Whether it’s permits, design adjustments, or renovation partners
              — we’ve got you covered end-to-end.
            </p>
          </div>
        </div>
      </section>

      <section className='py-5 px-5 md:px-20'>
        <MapComponent />
      </section>

      <ScrollToTopBtn />
    </>
  );
};

export default AboutUs;
