import Authorization from './pages/Authorization';
import HomePage from './pages/HomePage';
import Property from './pages/Property';
import Details from './pages/Details';
import About from './pages/About';
import FavEstate from './pages/FavEstate';
import Page404 from './pages/404';
import Contact from './pages/Contact';
import SettingsEstate from './pages/SettingsEstate';

import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import Header from './components/Header';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router';

import './App.css';

const Layout = ({ children }) => {
  const location = useLocation();
  const hideLayoutRoutes = ['/', '/404'];
  const hideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Header />}

      {hideLayout ? (
        <>{children}</>
      ) : (
        <main className='pt-18 min-h-screen bg-white'>{children}</main>
      )}

      {!hideLayout && <Footer />}
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
          <Route path='/404' element={<Page404 />} />
          <Route path='*' element={<Navigate to='/404' />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
