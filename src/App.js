import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/common/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import ShowCase from "./components/ShowCase/ShowCase";
import Paralax from "./components/Parallax/Paralax";
import Footer from "./components/Footer/Footer";
import Home from "./components/HomeSection/Home/Home";



function App() {

  return (
    <div>
      <NavBar />
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/showcase" element={<ShowCase/>} />
          <Route path="/paralax" element={<Paralax/>} />
      </Routes>
      {/* <Footer/> */}
      </BrowserRouter>
      
    </div>
  );
}

export default App;
