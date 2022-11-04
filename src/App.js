import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/common/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import ShowCase from "./components/ShowCase/ShowCase";
import { useEffect, useRef } from "react";
import Paralax from "./components/Parallax/Paralax";
import Footer from "./components/Footer/Footer";
import Home02 from "./components/Home02/Home02";


function App() {

  return (
    <div>
      <NavBar />
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home02 />} />
          <Route path="/showcase" element={<ShowCase/>} />
          <Route path="/paralax" element={<Paralax/>} />
      </Routes>
      {/* <Footer/> */}
      </BrowserRouter>
      
    </div>
  );
}

export default App;
