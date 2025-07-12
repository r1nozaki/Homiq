const AdvantageCard = ({ icon, title, descr }) => {
  return (
    <div className=' max-w-xs'>
      <div className='text-3xl mb-2 text-green-400'>{icon}</div>
      <h3 className='text-xl font-bold mt-1'>{title}</h3>
      <p className='text-lg text-gray-600 mt-2'>{descr}</p>
    </div>
  );
};

export default AdvantageCard;
