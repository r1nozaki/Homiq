import { useState, useEffect } from 'react';
import { lenis } from '../lenisInstance';
import { useTheme } from '../context/ThemeContext';

const ScrollToTopBtn = () => {
  const [visible, setVisible] = useState(false);
  const { darkMode } = useTheme();

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
      className={`fixed bottom-5 right-2 md:bottom-10 md:right-10 h-5 w-5 md:h-10 md:w-10 rounded-full shadow-md transition duration-300 z-50 hover:cursor-pointer ${
        darkMode 
          ? 'bg-gray-700 text-white hover:bg-green-400' 
          : 'bg-black text-white hover:bg-green-400'
      }`}
      aria-label='Scroll to top'
    >
      ↑
    </button>
  );
};

export default ScrollToTopBtn;
