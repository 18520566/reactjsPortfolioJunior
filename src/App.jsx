import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience/index.tsx";
import Footer from "./components/Footer/index.tsx";
import Header from "./components/Header";
import Nav from "./components/Nav/index.tsx";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services/index.tsx";
import Testimonials from "./components/Testimonials";

const App = () => {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false),2000)
  }, [])
  

  return (
    <>
      {loading ? (
        <div className="loading">
            <ReactLoading
          type={"spin"}
          color={"#4db5ff"}
          width={'10%'}
        />
        </div>
      
      ) : (
        <>
          <Header />
          <Nav />
          <About />
          <Experience />
          <Services />
          <Portfolio />
          <Testimonials />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
