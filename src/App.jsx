import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import About from "./components/about/about";
import Nav from "./components/nav/nav";
import Preloader from "./components/pre";
import "tailwindcss/tailwind.css";
import "./Firebase/intialize"
import FloatButton from "./components/nav/FloatButton";

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
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <FloatButton/>
        <Nav />
        <Routes>
          <Route path="/" element={<><Header /></>} />
          <Route path="/about" element={<><Footer /><About /></>} />
          <Route path="/portfolio" element={<><Footer /><Portfolio /></>} />
          <Route path="/contact" element={<><Footer /><Contact /></>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
