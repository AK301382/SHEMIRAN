import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import About from './components/About';
import Products from './components/Products';
import ProductOfTheMonth from './components/ProductOfTheMonth';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from './components/ui/sonner';
import BlogPost1 from './pages/BlogPost1';
import BlogPost2 from './pages/BlogPost2';
import BlogPost3 from './pages/BlogPost3';

function HomePage() {
  return (
    <>
      <HeroSlider />
      <About />
      <Products />
      <ProductOfTheMonth />
      <Blog />
      <FAQ />
      <Contact />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog/sheko-baleshti-secrets" element={<BlogPost1 />} />
              <Route path="/blog/from-production-to-table" element={<BlogPost2 />} />
              <Route path="/blog/creative-party-ideas" element={<BlogPost3 />} />
            </Routes>
          </main>
          <Footer />
          <Toaster position="top-center" />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
