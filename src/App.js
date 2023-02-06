// internal import
import './App.scss'
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import {images} from './constant'
import Home from './pages/Home/Home';
import Notfound from './pages/Notfound/Notfound';
import Apropos from './pages/Apropos/Apropos';
import Details from './pages/Details/Details';
import Footer from './components/Footer/Footer';


// external import
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router basename='/Kasa_Project'>
      <Navbar/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/apropos' element={<Apropos/>}/>
          <Route path='/details/:id' element={<Details/>}/>
          <Route path='*' element={<Notfound/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>

  );
}

export default App;
