// src/App.js
import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { getTheme } from './theme';
import Navbar from './components/Navbar';
import BackToTopButton from './components/BackToTopButton';

import HomePage from './pages/HomePage';
// HistoryPage import removed
// removed Met360Page and FlarexPage imports (product content moved into OurProductsPage)
import ForecastPage from './pages/ForecastPage';
import OurProductsPage from './pages/OurProductsPage';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

function App() {
  const [mode, setMode] = useState('light');
  const theme = useMemo(() => getTheme(mode), [mode]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ScrollToTop />
        <Navbar mode={mode} setMode={setMode} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/products" element={<OurProductsPage />} />
          {/* removed /products/met360 and /products/flarex routes - content is displayed on /products */}
          <Route path="/contact" element={<ContactSection />} />
          {/* /history route removed */}
          <Route path="/forecast" element={<ForecastPage />} />
          <Route
            path="*"
            element={
              <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h2>404 - Page Not Found</h2>
              </div>
            }
          />
        </Routes>
        <BackToTopButton />
      </Router>
    </ThemeProvider>
  );
}

export default App;
