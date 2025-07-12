import Authorization from './pages/Authorization';
import HomePage from './pages/HomePage';
import Property from './pages/Property';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Authorization />}></Route>
        <Route path='/home' element={<HomePage />}></Route>
        <Route path='/property' element={<Property />}></Route>
      </Routes>
    </Router>
  );
};
export default App;
