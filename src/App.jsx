import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Testimonials from "./components/testimonials/testimonials";
import Experience from "./components/experience/experience";
import Portfolio from "./components/portfolio/portfolio";
import Service from "./components/service/service";
import Contact from "./components/contact/contact";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import About from "./components/about/about";
import Nav from "./components/nav/nav";
import Preloader from "./components/pre";

const App = () => {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Nav />
        <Routes>
          <Route path="/" element={<><Header /></>} />
          <Route path="/about" element={<><About /><Footer /></>} />
          <Route path="/experience" element={<><Experience /><Footer /></>} />
          <Route path="/services" element={<><Service /><Footer /></>} />
          <Route path="/portfolio" element={<><Portfolio /><Footer /></>} />
          <Route path="/testimonials" element={<><Testimonials /><Footer /></>} />
          <Route path="/contact" element={<><Contact /><Footer /></>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
