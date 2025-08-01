const AdvantageCard = ({ icon, title, descr }) => {
  return (
    <div className=' max-w-xs'>
      <div className='mb-2 text-green-400'>{icon}</div>
      <h3 className='md:text-xl text-lg font-bold mt-1'>{title}</h3>
      <p className='md:text-lg text-base text-gray-600 mt-2'>{descr}</p>
    </div>
  );
};

export default AdvantageCard;
