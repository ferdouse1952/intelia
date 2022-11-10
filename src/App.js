import "./App.css";
import {  Route, Routes } from "react-router-dom";
import NavBar from "./components/common/NavBar/NavBar";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
import ShowCase from "./components/ShowCase/ShowCase";
// import Paralax from "./components/Parallax/Paralax";
import Footer from "./components/Footer/Footer";
import Home from "./components/HomeSection/Home/Home";
import Testimonial from "./components/HomeSection/Testimonial/Testimonial";
import OurService from "./components/HomeSection/OurService/OurService";



function App() {

  return (
    <div>
      <NavBar />
      
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/showcase" element={<ShowCase/>} />
          <Route path="/testimonial" element={<Testimonial/>} />
          <Route path="/services" element={<OurService/>} />
          
      </Routes>
      <Footer/>
      
      
    </div>
  );
}

export default App;
