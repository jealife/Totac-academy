import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import ScrollToTop from './components/ScrollToTop';
import { Fragment } from 'react';
// ..
AOS.init();


function App() {
  return (
    <Fragment>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
      </Routes>
    </Fragment>
  );
}

export default App;
