import { useState, useEffect } from 'react';
import { lenis } from '../lenisInstance';

const ScrollToTopBtn = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    lenis.scrollTo(0);
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className='fixed bottom-5 right-2 md:bottom-10 md:right-10 h-5 w-5 md:h-10 md:w-10 bg-black text-white rounded-full shadow-md hover:bg-green-400 transition duration-300 z-50 hover:cursor-pointer'
      aria-label='Scroll to top'
    >
      ↑
    </button>
  );
};

export default ScrollToTopBtn;
