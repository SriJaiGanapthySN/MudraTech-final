import {useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import Expertise from './pages/Expertise';
import Experience from './pages/Experience';

function App() {
  useEffect(() => {
    document.title = 'Mudra Technologies'; 
  }, []);
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<AboutUs />} />
            <Route path="/products" element={<Products />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;