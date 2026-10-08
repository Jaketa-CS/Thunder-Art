import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Pages
import Navbar from '@/components/Navbar';
import Home from '@/pages/Home';
import Commissions from '@/pages/Commissions';
import About from '@/pages/About';

import BackToTop from '@/components/BackToTop';

import { ThemeProvider } from '@/contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app-container flex min-h-screen flex-col">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/commissions" element={<Commissions />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <BackToTop />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
