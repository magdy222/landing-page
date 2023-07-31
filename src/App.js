import React from "react";
import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import News from "./components/News";

function App() {
  return (
    <div >
      <NavBar/>
      <Hero/>
      <Analytics/>
      <News/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
