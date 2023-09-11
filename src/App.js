import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Blog from './pages/blog/Blog';
// ..
AOS.init();


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
  );
}

export default App;
