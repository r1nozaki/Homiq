import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

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
import Layout from './components/Layout';

import './App.css';

const App = () => {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
};

export default App;
