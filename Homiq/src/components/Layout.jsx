import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const location = useLocation();
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const { darkMode } = useTheme();

  const hideLayoutRoutes = ['/', '/404'];
  const hideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Header isFooterVisible={isFooterVisible} />}

      {hideLayout ? (
        <>{children}</>
      ) : (
        <main className={`pt-16 min-h-screen transition-colors duration-300 ${
          darkMode ? 'bg-gray-900' : 'bg-white'
        }`}>{children}</main>
      )}

      {!hideLayout && <Footer setIsFooterVisible={setIsFooterVisible} />}
    </>
  );
};

export default Layout; 