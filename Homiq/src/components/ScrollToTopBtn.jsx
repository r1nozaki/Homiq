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
      className='fixed bottom-10 right-10 h-10 w-10 bg-black text-white rounded-full shadow-md hover:bg-green-400 transition duration-300 z-50 hover:cursor-pointer'
      aria-label='Scroll to top'
    >
      ↑
    </button>
  );
};

export default ScrollToTopBtn;
