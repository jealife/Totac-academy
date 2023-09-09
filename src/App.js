import { Routes,Route} from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const orange='#ff7607';
const blue='#0400ff';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/a-propos" element={<About/> } />
    </Routes>
  );
}

export default App;
