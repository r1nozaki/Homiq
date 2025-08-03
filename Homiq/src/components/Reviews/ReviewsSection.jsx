import { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';
import ReviewsData from '../../data/ReviewsData';
import ReviewAddForm from './ReviewAddForm';

const ReviewsSections = () => {
  const [openModal, setOpenModal] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const storedReviews = localStorage.getItem('homiq_reviews');
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews));
    } else {
      setReviews(ReviewsData);
    }
  }, []);

  const addReview = newReview => {
    const updated = [...reviews, newReview];
    setReviews(updated);
    localStorage.setItem('homiq_reviews', JSON.stringify(updated));
  };

  return (
    <section className='w-full min-h-screen md:px-15 px-5 pt-10 relative'>
      <h1 className='text-6xl font-bold text-green-500 mb-2 text-center'>Reviews</h1>
      <p className='text-center text-2xl font-medium mb-8'>What our clients say</p>

      <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-8'>
        {reviews.map((item, index) => (
          <ReviewCard
            key={index}
            ava={item.ava}
            name={item.name}
            surname={item.surname}
            stars={item.stars}
            review={item.review}
            date={item.date}
          />
        ))}
      </div>

      <div className='mx-auto w-55 h-10 py-16'>
        <button
          onClick={() => setOpenModal(true)}
          className='w-55 h-10 bg-green-400 text-white text-lg rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-green-500 hover:cursor-pointer'
        >
          Leave a review
        </button>
      </div>

      {openModal && (
        <>
          <div
            className='fixed inset-0 bg-black/40 backdrop-blur-sm z-40 pointer-events-auto'
            onClick={() => setOpenModal(false)}
          />
          <div className='fixed inset-0 flex md:items-center justify-center z-50 p-4 md:mt-18'>
            <ReviewAddForm setOpenModal={setOpenModal} addReview={addReview} />
          </div>
        </>
      )}
    </section>
  );
};

export default ReviewsSections;
