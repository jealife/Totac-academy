import { Routes,Route} from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/> } />
      <Route path="/a-propos" element={<About/> } />
    </Routes>
  );
}

export default App;
