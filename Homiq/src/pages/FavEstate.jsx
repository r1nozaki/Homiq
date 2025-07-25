import Favorite from '../components/Favorite';
import { Title, Meta } from 'react-head';

const FavEstate = () => {
  return (
    <>
      <Title>Favorites</Title>
      <Meta name='description' content='Favorite ads' />
      <Favorite />
    </>
  );
};

export default FavEstate;
