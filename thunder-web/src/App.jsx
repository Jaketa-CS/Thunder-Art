import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Pages (We will create these next)
import Home from './pages/Home';
// import Commissions from './pages/Commissions'; 

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* We will add Navbar here later */}
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/commissions" element={<Commissions />} /> */}
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
