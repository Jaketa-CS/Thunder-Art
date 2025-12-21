import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Pages (We will create these next)
import Navbar from '@/components/Navbar';

// Pages (We will create these next)
import Home from '@/pages/Home';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar /> 
        
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
