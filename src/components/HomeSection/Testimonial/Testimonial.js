import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Testimonial.css';
import Slider from 'react-slick';




const Testimonial = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  
  return (
    <div className=''>
        
               {/* <!-- Testimonial Section --> */}
	<section class="testimonial-section">
		<div class="large-container">
			<div class="sec-title text-center">
				<span class="title">Testimonial</span>
				<h2>What Our core client say ?</h2>
			</div>
           

			<div class="testimonial-carousel owl-carousel owl-theme">
            <Slider  {...settings}>
				{/* <!-- Testimonial Block --> */}
				<div class="testimonial-block">
					<div class="inner-box">
						<div class="text">“What an outstanding team. We have been using Intelia's team augmentation service as part of our rapid build agenda since 2018. Their developers get it and are highly committed.”</div>
						<div class="info-box">
							<div class="thumb"><img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/elrogers.png" alt=""/></div>
							<h4 class="name">Elaine Rogers</h4>
							<span class="designation">Ui Designer & CEO</span>
						</div>
					</div>
				</div>

				{/* <!-- Testimonial Block --> */}
				<div class="testimonial-block">
					<div class="inner-box">
						<div class="text">“We’ve been working with the Intelia team for the past 2 years, and they’ve shown that they are a true partner who always works with the client’s goals in mind. They would be one of the best, most dedicated dev team’s I’ve worked with over the past 10 years.”</div>
						<div class="info-box">
							<div class="thumb"><img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/steve--jones.png" alt=""/></div>
							<h4 class="name">Steve Jones</h4>
							<span class="designation">Ui Designer & CEO</span>
						</div>
					</div>
				</div>

				{/* <!-- Testimonial Block --> */}
				<div class="testimonial-block">
					<div class="inner-box">
						<div class="text">“Intelia’s team worked wonderfully as part of us, they really understood the product we had in mind and condensed it masterfully bringing valuable insights to the table, delivering work professionally and on outstanding timeframes. Definitely would like to work with them again soon.”</div>
						<div class="info-box">
							<div class="thumb"><img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/hermann-reimers.png" alt=""/></div>
							<h4 class="name">Hermann Reimers</h4>
							<span class="designation">Ui Designer & CEO</span>
						</div>
					</div>
				</div>
                </Slider>

			</div>
            
			<div class="thumb-layer paroller">
				<figure class="image"><img src="http://t.commonsupport.com/adro/images/resource/user-thumbs.png" alt=""/></figure>
			</div>
		</div>
	</section>
	{/* <!--End Testimonial Section --> */}
       
    {/* BUILD SOMETHING WITH US */}
    <section className='bulidSection pt-5'>
        <div className="buildText text-center">
        <h1>BUILD SOMETHING WITH US</h1>
        <p>Let’s partner to build amazing products that will excite end users and drive enterprise ambitions.</p>
        <div className="build-btn">
        <button className='border-0'>GET IN TOUCH</button>
        </div>
        </div>
        <div className="team-members pt-5">
            <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/home-team-row.png" alt="" />
        </div>

    </section>

  
    </div>
  );
};

export default Testimonial;