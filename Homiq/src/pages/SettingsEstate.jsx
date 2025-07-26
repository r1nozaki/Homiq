import Settings from '../components/Settings';
import { Title, Meta } from 'react-head';

const SettingsEstate = () => {
  return (
    <>
      <Title>Settings</Title>
      <Meta name='description' content='Account settings' />
      <Settings />
    </>
  );
};

export default SettingsEstate;
