import { FaLinkedinIn } from 'react-icons/fa';

const PersonTeamCard = ({ ava, name, position, socialNetwork }) => {
  return (
    <div className=' w-70 h-95'>
      <img
        loading='lazy'
        src={ava}
        alt={name}
        className='rounded-lg object-cover w-70 h-70 '
      />

      <div>
        <h3 className='font-semibold text-2xl mt-2 w-20'>{name}</h3>
        <span className='mt-2 text-gray-400 text-lg'>{position}</span>
        <a
          href={socialNetwork}
          className='block bg-green-500 w-6 h-6 rounded-full pt-1 mt-2'
        >
          <FaLinkedinIn className='mx-auto text-white' />
        </a>
      </div>
    </div>
  );
};

export default PersonTeamCard;
