import FeedbackCard from './FeedbackCard';
import { Link } from 'react-router-dom';
import { avatar1, avatar2, avatar3 } from '../../assets/avatars/avatars';
import { FaAngleRight } from 'react-icons/fa';

const feedbacks = [
  {
    title: 'It proved to be exactly the kind of home we wanted.',
    text: 'We wish to express our thanks for your hard work in finding us a temporary home, which proved to be exactly what we wanted.',
    avatar: avatar1,
    name: 'Jaydon Aminoff',
    position: 'UX Designer',
  },
  {
    title: 'Nobody knows Portland and the peninsula better than David.',
    text: 'My wife and I had a dream of downsizing from our house in Cape Elizabeth into a small condo closer to where we work and play in Portland. ',
    avatar: avatar2,
    name: 'Alfredo Donin',
    position: 'UI Designer',
  },
  {
    title: 'He keeps his client’s best interests in sharp focus',
    text: 'After working with David to sell my home in 2013, I was convinced that he’s the only realtor I’ll ever need. Since then, I’ve bought two properties and sold one.',
    avatar: avatar3,
    name: 'Makenna Korsgaard',
    position: 'UX Researcher',
  },
];

const Feedback = () => {
  return (
    <div className='w-full bg-white md:px-15 px-5 pt-30'>
      <span className='uppercase w-69 h-10 bg-[#F5F5F5] text-[#69B99D] text-center text-sm pt-3 inline-block md:mt-13 font-semibold'>
        CUSTOMER TESTIMONIAL
      </span>
      <div className='flex items-center justify-between'>
        <h2 className='text-xl md:text-5xl font-bold w-60 md:w-120 mt-4 text-[#054457]'>
          Peopel say about us?
        </h2>
        <button className='text-[#69B99D] flex items-center gap-2 text-base md:text-lg font-medium cursor-pointer hover:underline mt-4'>
          <Link to='/reviews'>Learn More</Link>
          <FaAngleRight className='w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#200E32] text-white ' />
        </button>
      </div>

      <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-42.5'>
        {feedbacks.map((item, index) => (
          <FeedbackCard
            key={index}
            title={item.title}
            text={item.text}
            avatar={item.avatar}
            name={item.name}
            position={item.position}
          />
        ))}
      </div>
    </div>
  );
};

export default Feedback;
