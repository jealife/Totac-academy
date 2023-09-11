import { Routes,Route} from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import ScrollToTop from './components/ScrollToTop';
// ..
AOS.init();


function App() {
  return (
    <Routes>
      <ScrollToTop/>
      <Route path="/" element={<Home/>} />
      <Route path="/a-propos" element={<About/> } />
    </Routes>
  );
}

export default App;
