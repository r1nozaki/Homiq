import Authorization from './pages/Authorization';
import HomePage from './pages/HomePage';
import Property from './pages/Property';
import Details from './pages/Details';
import About from './pages/About';
import FavEstate from './pages/FavEstate';
import Page404 from './pages/404';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { useLocation } from 'react-router';

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
const Layout = ({ children }) => {
  const location = useLocation();
  const hideLayout = location.pathname === '/';
  return (
    <>
      {!hideLayout && <Header />}
      {children}
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
          <Route path='/' element={<Authorization />}></Route>
          <Route path='/home' element={<HomePage />}></Route>
          <Route path='/property' element={<Property />}></Route>
          <Route path='/:type/:id' element={<Details />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/favorite' element={<FavEstate />}></Route>
          <Route path='*' element={<Page404 />}></Route>
        </Routes>
      </Layout>
    </Router>
  );
};
export default App;
