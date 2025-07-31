import ReviewsSections from '../components/Reviews/ReviewsSection';
import { Title, Meta } from 'react-head';

const Reviews = () => {
  return (
    <>
      <Title>Reviews</Title>
      <Meta name='description' content='reviews Homiq visitors' />
      <ReviewsSections />
    </>
  );
};

export default Reviews;
