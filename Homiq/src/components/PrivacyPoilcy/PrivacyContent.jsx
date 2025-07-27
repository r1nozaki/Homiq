const PrivacyContent = ({ title, subtitle, content }) => {
  return (
    <div>
      <h2 className='text-3xl font-bold text-green-400 mb-6'>{title}</h2>
      {subtitle && <p className='text-lg mb-4'>{subtitle}</p>}
      {Array.isArray(content) ? (
        <ul className='list-disc pl-6 mb-8'>
          {content.map((item, index) => (
            <li key={index} className='text-lg'>
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className='text-lg  mb-8'>{content}</p>
      )}
    </div>
  );
};

export default PrivacyContent;
