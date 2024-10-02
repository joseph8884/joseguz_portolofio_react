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
import React, { useState, useEffect } from "react";

const App = () => {
  const [section, setSection] = useState('')
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
      <Nav getSection={setSection}/>
      {
        section === 'home' ? <><Header /><Footer /></>:
        section === 'about' ? <><About /><Footer /></>:
        section === 'experience' ? <><Experience /><Footer /></>:
        section === 'services' ? <><Service /><Footer /></>:
        section === 'portfolio' ? <><Portfolio /><Footer /></> :
        section === 'testimonials' ? <><Testimonials /><Footer /></>:
        section === 'contact' ? <><Contact /><Footer /></> : null
        /**
         * <About />
        <Experience />
        <Service />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
         */
      }
      </div>
    </>
  );
};

export default App;
