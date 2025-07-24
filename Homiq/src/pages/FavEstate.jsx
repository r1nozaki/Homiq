import Favorite from '../components/Favorite';
import Header from '../components/Header';
import { Title, Meta } from 'react-head';
const FavEstate = () => {
  return (
    <>
      <Title>Favorites</Title>
      <Meta name='description' content='Favorite ads' />
      <Header />
      <Favorite />
    </>
  );
};

export default FavEstate;
