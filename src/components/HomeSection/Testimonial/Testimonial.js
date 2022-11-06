import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Testimonial.css';
import Slider from 'react-slick';


const Testimonial = () => {
    const settings = {
        dots: true,
        fade: true,
        className: "center",
        
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        
         
      };
    return (
        <div className='testimonialSection text-white testimonialSlider'>
            {/* <Slider {...settings}>
            <div className="person">
             <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/elrogers.png" alt="" />
             <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/steve--jones.png" alt="" />
             <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/hermann-reimers.png" alt="" />
             <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/marcus-scott.png" alt="" />
             <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/catherine-wagonner.png" alt="" />
          </div>
          <div className=''>
            <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/corrivium--testimonial-bg.jpg" alt="" />
            <p>“What an outstanding team. We have been using Intelia's team augmentation service as part of our rapid build agenda since 2018. Their developers get it and are highly committed.” - Elaine Rogers</p>
        </div>
          <div>
            <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/corrivium--testimonial-bg.jpg" alt="" />
            <p>“We’ve been working with the Intelia team for the past 2 years, and they’ve shown that they are a true partner who always works with the client’s goals in mind. They would be one of the best, most dedicated dev team’s I’ve worked with over the past 10 years.” - Steve Jones</p>
            
          </div>
          <div>
            <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/pantram-testimonial-bg.jpg" alt="" />
            <p>“Intelia’s team worked wonderfully as part of us, they really understood the product we had in mind and condensed it masterfully bringing valuable insights to the table, delivering work professionally and on outstanding timeframes. Definitely would like to work with them again soon.” - Hermann Reimers</p>
        </div>
          <div>
            <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/bitcast-testimonial-bg.png" alt="" />
            <p>“It was a pleasure to have Intelia augment our design team at Bitcast by delivering great UX insights and even better motion graphics. Their knowledge of best practices for specific devices and platforms came in particularly useful.” - Marcus Scott</p>
        </div>
          <div>
            <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/bitcast-testimonial-bg.png" alt="" />
            <p>“I've worked with 60 different development teams in the past and there is no one else I'd work with but Intelia.” - Catherine Wagonner</p>
        </div>
          
         
        </Slider> */}
            
        </div>
    );
};

export default Testimonial;