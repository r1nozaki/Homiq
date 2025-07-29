import PrivacySection from '../components/PrivacyPoilcy/PrivacySection';
import { Title, Meta } from 'react-head';

const PrivacyPolicy = () => {
  return (
    <>
      <Title>Privacy&Policy</Title>
      <Meta name='description' content='Homiq Privacy&Policy' />
      <PrivacySection />
    </>
  );
};

export default PrivacyPolicy;
