import Authorization from './pages/Authorization';
import HomePage from './pages/HomePage';
import Property from './pages/Property';
import Details from './pages/Details';
import About from './pages/About';
import FavEstate from './pages/FavEstate';
import Page404 from './pages/404';
import { BrowserRouter as Router, Routes, Route } from 'react-router';

import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Authorization />}></Route>
        <Route path='/home' element={<HomePage />}></Route>
        <Route path='/property' element={<Property />}></Route>
        <Route path='/:type/:id' element={<Details />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/favorite' element={<FavEstate />}></Route>
        <Route path='*' element={<Page404 />}></Route>
      </Routes>
    </Router>
  );
};
export default App;
