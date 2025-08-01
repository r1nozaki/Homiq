import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';

import Authorization from './pages/Authorization';
import HomePage from './pages/HomePage';
import Property from './pages/Property';
import Details from './pages/Details';
import About from './pages/About';
import FavEstate from './pages/FavEstate';
import Page404 from './pages/404';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';
import SettingsEstate from './pages/SettingsEstate';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Help from './pages/Help';
import TermsConditions from './pages/TermsConditions';
import LegalNotice from './pages/LegalNotice';
import Lifestyle from './pages/Lifestyle';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import Header from './components/Header';

import './App.css';

const Layout = ({ children }) => {
  const location = useLocation();
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  const hideLayoutRoutes = ['/', '/404'];
  const hideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Header isFooterVisible={isFooterVisible} />}

      {hideLayout ? (
        <>{children}</>
      ) : (
        <main className='pt-16 min-h-screen bg-white'>{children}</main>
      )}

      {!hideLayout && <Footer setIsFooterVisible={setIsFooterVisible} />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path='/' element={<Authorization />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/property' element={<Property />} />
          <Route path='/:type/:id' element={<Details />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/favorite' element={<FavEstate />} />
          <Route path='/settings' element={<SettingsEstate />} />
          <Route path='/privacy' element={<PrivacyPolicy />} />
          <Route path='/help' element={<Help />} />
          <Route path='/terms' element={<TermsConditions />} />
          <Route path='/legal' element={<LegalNotice />} />
          <Route path='/lifestyle' element={<Lifestyle />} />
          <Route path='/reviews' element={<Reviews />} />
          <Route path='/404' element={<Page404 />} />
          <Route path='*' element={<Navigate to='/404' />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
