import TermsSection from '../components/TermsConditions/TermsSection';
import { Title, Meta } from 'react-head';
const TermsConditions = () => {
  return (
    <>
      <Title>Terms&Conditions</Title>
      <Meta name='description' content='Homiq Terms&Conditions' />
      <TermsSection />
    </>
  );
};

export default TermsConditions;
