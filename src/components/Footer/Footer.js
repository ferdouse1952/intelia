import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="row">
        <div className="col-3">
          <ul>
            <h5>LEARN MORE</h5>
            <li>
              <Link>Showcase</Link>
            </li>
            <li>
              <Link>Clients</Link>
            </li>
          </ul>
        </div>
        <div className="col-3">
          <ul>
            <h5>ABOUT US</h5>
            <li>
              <Link>About Intelia</Link>
            </li>
            <li>
              <Link>Leadership</Link>
            </li>
            <li>
              <Link>The Intelia Advantage</Link>
            </li>
            <li>
              <Link>Academy</Link>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <ul>
            <h5>NEWSLETTER</h5>
            <p>
              Subscribe to our newsletters.
              <br /> We don’t Bite!
            </p>
            <div className="form-floating mb-3 d-flex">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Enter Email</label>
              <button className="border-0 fs-5 rounded ms-2">SUBMIT</button>
            </div>
          </ul>
        </div>
        </div>
        <div className="footer-divider"></div>
        <div className="row pt-5">
        <div className="col-3">
          <ul>
            <div className="footerLogo">
              <img
                src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/logo-black.svg"
                alt=""
              />
            </div>
          </ul>
        </div>
        <div className="col-3">
          <ul>
            <h5>LAGOS</h5>
            <p>2A Adewole Kuku Street,Off Fola Osibo, Lekki Phase 1, Lagos.</p>
          </ul>
        </div>
        <div className="col-4">
          <ul>
            <h5>TEXAX</h5>
            <p>19523 Riverwalk Drive, Porter, TX 77365.</p>
          </ul>
        </div>
        </div>
      </div>
  );
};

export default Footer;
