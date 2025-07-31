import LglNoticeSection from '../components/LegalNotice/LglNoticeSection';
import { Title, Meta } from 'react-head';
const LegalNotice = () => {
  return (
    <>
      <Title>Legal Notice</Title>
      <Meta name='description' content='Homiq legal notice' />
      <LglNoticeSection />
    </>
  );
};

export default LegalNotice;
