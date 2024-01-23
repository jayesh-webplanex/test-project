import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/home';
import About from "./pages/about";
import { useEffect } from 'react';

function App() {

  return (
    
    <div className="App">

        <Router>
          <ScrollToTop/>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About/>} />
            </Routes>
       </Router>
    </div>
  );
}

const ScrollToTop = () => {
  const {pathname} = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null
}
export default App;
