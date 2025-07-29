import HelpSection from '../components/Help/HelpSection';
import { Title, Meta } from 'react-head';
const Help = () => {
  return (
    <>
      <Title>Help center</Title>
      <Meta name='description' content='Homiq help center' />
      <HelpSection />
    </>
  );
};

export default Help;
