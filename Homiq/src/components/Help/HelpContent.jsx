const HelpContent = ({ question, answer }) => {
  return (
    <div>
      <h2 className='text-2xl font-bold'>{question}</h2>
      <p className='text-lg mt-2'>{answer}</p>
    </div>
  );
};

export default HelpContent;
