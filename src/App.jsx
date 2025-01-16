import Footer from './components/Footer';
import HomePage from './components/home/HomePage';
import MainNavbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Drink from './components/drink/Drink';
import Club from './components/club/Club';
function App() {
  return (
    <Router>
      <MainNavbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/drink' element={<Drink />} />
        <Route path='/club' element={<Club />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
