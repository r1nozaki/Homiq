const LglNoticeContnent = ({ title, content }) => {
  return (
    <div>
      <h2 className='text-3xl font-bold text-green-400 mb-6'>{title}</h2>
      {Array.isArray(content) ? (
        <ul className='pl-6 mb-8'>
          {content.map((item, index) => (
            <li key={index} className='text-lg'>
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className='text-lg mb-8 '>{content}</p>
      )}
    </div>
  );
};

export default LglNoticeContnent;
