import PersonTeamCard from './PersontTeamCard';
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
      <section className='px-20 pt-30 bg-[#F5F5F5]'>
        <div className='flex gap-10 items-center'>
          <div className='w-1/2'>
            <h1 className='font-bold text-7xl'>Who we are</h1>
            <h2 className='font-medium text-3xl text-green-500 mt-5'>
              Building trust, one home at a time
            </h2>
            <p className='text-lg max-w-115 mt-5'>
              At HOMIQ, we believe everyone deserves a home that reflects their dreams.
              Our mission is to simplify real estate experiences by offering personalized,
              smart, and transparent services
            </p>
            <a
              href='tel:'
              className='flex gap-3 items-center justify-center w-55 text-lg h-10 mt-5 p-5 rounded-lg bg-green-500 text-white transition duration-300 ease-in-out transform hover:scale-105 hover:bg-green-600 '
            >
              <FaPhoneAlt /> Contact our team
            </a>
          </div>

          <div className='w-1/2'>
            <img src={RealtorTeam} alt='Realtor Team' className='rounded-3xl ' />
          </div>
        </div>

        <div className='grid grid-cols-3 gap-40 mt-15'>
          <div className='w-50 h-54'>
            <FaRegCompass size={35} />
            <h2 className='font-semibold text-2xl mt-2'>Our Mission</h2>
            <p className='text-lg mt-2'>Make real estate easy. honest and personal</p>
          </div>
          <div>
            <FaRegEye size={35} />
            <h2 className='font-semibold text-2xl mt-2'>Our Vision</h2>
            <p className='text-lg mt-2'>
              A world where every person finds the perfect home
            </p>
          </div>
          <div>
            <FaRegHeart size={35} />
            <h2 className='font-semibold text-2xl mt-2'>Our Values</h2>
            <p className='text-lg mt-2'>Trust | Innovation | Care</p>
          </div>
        </div>
      </section>

      <section className='px-20  pt-20 pb-20 '>
        <h2 className='text-5xl font-bold'>Meet our team</h2>
        <div className='mt-10 grid grid-cols-4 gap-40'>
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

      <section className='px-20  pb-10 '>
        <h2 className='text-5xl font-bold'>What we do</h2>
        <div className='grid grid-cols-3 gap-40 mt-15'>
          <div className='w-87 h-66.5'>
            <FaHome size={50} className='mx-auto text-green-500' />
            <h2 className='font-semibold text-2xl mt-2 text-center'>
              Property Selection
            </h2>
            <p className='text-lg mt-2 text-center'>
              We specialize in helping clients buy, sell, and rent residential and
              commercial properties. From cozy apartments to luxury villas, we ensure
              smooth transactions and legal safety for both parties involved.
            </p>
          </div>
          <div>
            <FaHandshake size={50} className='mx-auto text-green-500' />
            <h2 className='font-semibold text-2xl mt-2 text-center'>Consultation</h2>
            <p className='text-lg mt-2 text-center'>
              Our experts provide accurate property valuations and real estate investment
              consultations. We guide you through market trends, pricing strategies, and
              investment opportunities to make smart property decisions.
            </p>
          </div>
          <div>
            <FaWrench size={50} className='mx-auto text-green-500' />
            <h2 className='font-semibold text-2xl mt-2 text-center'>Renovations</h2>
            <p className='text-lg mt-2 text-center'>
              Beyond transactions, we assist in property renovation planning and legal
              paperwork. Whether it’s permits, design adjustments, or renovation partners
              — we’ve got you covered end-to-end.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
