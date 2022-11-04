import React from "react";
import './Paralax.css';

const Paralax = () => {
    document.addEventListener("mousemove", parallax);
    function parallax(event) {
        this.querySelectorAll(".parallax-wrap span").forEach((shift) => {
            const position = shift.getAttribute("value");
            const x = (window.innerWidth - event.pageX * position) / 90;
            const y = (window.innerHeight - event.pageY * position) / 90;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}
  return (
    <div>
      <div className="parallax-wrap">
        <span value="-15"></span>
        <span value="5"></span>
        <span value="30"></span>
        <span value="-5"></span>
        <span value="15"></span>
        <h2>Parallax effect</h2>
      </div>
    </div>
  );
};

export default Paralax;
