import Authorization from './pages/Authorization';
import HomePage from './pages/HomePage';
import Property from './pages/Property';
import Details from './pages/Details';
import { BrowserRouter as Router, Routes, Route } from 'react-router';

import './App.css';
import EstateDetails from './components/EstateDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Authorization />}></Route>
        <Route path='/home' element={<HomePage />}></Route>
        <Route path='/property' element={<Property />}></Route>
        <Route path='/:type/:id' element={<Details />}></Route>
        <Route path='/:type/:id' element={<Details />}></Route>
      </Routes>
    </Router>
  );
};
export default App;
