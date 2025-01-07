import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
//import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

import './App1.css';


function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      {/* <Testimonials /> */}
      <FAQ />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
