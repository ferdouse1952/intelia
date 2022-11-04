import firstVdo from "../../Video/first-video.mp4";
import secondVdo from "../../Video/second-video.mp4";
import thirdVdo from "../../Video/third-video.mp4";
import fourthdVdo from "../../Video/fourth-video.mp4";
import fifthVdo from "../../Video/fifth-video.mp4";
import sixthVdo from "../../Video/sixth-video.mp4";
import seventhVdo from "../../Video/seventh-video.mp4";
import eighthVdo from "../../Video/eighth-video.mp4";
import ninthVdo from "../../Video/ninth-video.mp4";
import './ShowCase.css';

const ShowCase = () => {
    document.addEventListener("mousemove", parallax);
    function parallax(event) {
        this.querySelectorAll(".parallax-wrap span").forEach((shift) => {
            const position = shift.getAttribute("value");
            const x = (window.innerWidth - event.pageX * position) / 100;
            const y = (window.innerHeight - event.pageY * position) / 100;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}   
return (
    <div>
    <div className="showcase-hero-section">
      <div className="row">
        <div className="col-6">
            <div className="showcase-text">
                <h1>Uncompromising in</h1>
                <h1 className="pb-2">performance and form</h1>
                <div className="divider divider-blue"></div>
                <p className="pt-3">When invention becomes an imperative, we unbind the product's vision with client success in mind.</p>
            </div>
        </div>
        <div className="col-6">
            <div className="img-div">
                <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/intelia-iphone-concept.png" alt="" />
            </div>
        </div>
      </div>
    </div>
    {/* OXFAM */}
    
    <div className="showcase-oxfam-section parallax-wrap">
    <div className="container">
        <div className="row oxfam-row">
            <div className="col-6 work-summary">
                <div className="oxfam-logo">
                    <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/oxfamaltlogo.svg" alt="" />
                </div>
                <h1>OXFAM</h1>
                <div className="divider divider-blue"></div>
                <p>Explore opportunities as a traveler or tourist to get involved in activities that make a difference to the societies and inhabitants of the places you visit.</p>
            </div>
            <div className="col-6 device-preview">
                {/* <div className="preview-ipad">
                <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/OFF.png" alt="" />
                </div> */}
                <div className="oxfam-preview-video">
                   <video  className="ipad-video-preview" loop autoplay="" muted>
                    <source src={firstVdo} type="video/mp4"/>
                 </video>
                </div>
            </div>
            
            <div className="showcase-background-objects ease-translate">
                <span className="orb-1" value="5">
                    <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/oxfam-bg-circleSVG.svg" alt="orb-1"/>
                </span>
                <span className="orb-2" value="-5">
                    <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/oxfam-bg-orb2.png" alt="orb-2"/>
                </span>
                <span className="orb-path">
                    <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/oxfam-bg-path.svg" alt="path"/>
                </span>
                <span className="small-orb" value="5">
                    <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/oxfam-bg-circleSVG.svg" alt="small-orb"/></span>
                <span className="bg-dots-1">
                    <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/oxfam-bg-dots.svg" alt="dots"/>
                </span>
                <span className="bg-dots-2"><img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/oxfam-bg-dots.svg" alt="dots"/></span>
            </div>
        </div>
        </div>
    </div>
    {/* FilmHouse */}
    <div className="showCase-filmHouse-section parallax-wrap">
        <div className="container">
            <div className="row filmHouse-row">
                <div className="col-6 work-summary">
                    <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/filmhouseLogo.svg" alt="" />
                    <h1>Filmhouse</h1>
                    <div className="divider divider-blue"></div>
                    <p>Website, App and Kiosk design for the biggest film exhibition company in West Africa</p>
                </div>
                <div className="col-6 device-preview">
                    <div className="filmHouse-video">
                        <video  className="filmHouse-video-preview" loop autoplay="" muted><source src={secondVdo} type="video/mp4"/>
                        </video>
                    </div>
            <div className="showcase-background-objects ease-translate">
                <span className="lining" value="1">
                    <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/lining.svg" alt="lining"/>
                </span>
                <span className="oval" value="5">
                    <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/oval.png" alt="oval"/>
                </span>
                <span className="oval-1" value="30">
                    <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/oval1.png" alt="oval-1"/>
                </span>
                <span className="oval-2" value="5">
                    <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/oval2.png" alt="oval-2"/>
                </span>
                <span className="oval-3" value="10">
                    <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/oval3.png" alt="oval-3"/>
                </span>
                <span className="oval-4" value="5">
                    <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/oval4.png" alt="oval-4"/>
                </span>
            </div>
        </div>
        </div>
      </div>
    </div>
    {/* IGR Monitor */}
    <div className="monitor-showcase-section parallax-wrap">
        <div className="container">
            <div className="row">
                <div className="col-6 work-summary">
                <div className="monitor-logo">
                <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/igrLogo.svg" alt="" />
                </div>
                <h1>IGR Monitor</h1>
                <div className="divider divider-blue"></div>
                <p>Complete technology solution for IGR collector and enforcer management including non-invasive GPS tracking for the Edo State Government.</p>
               <div className="mobile-logos d-flex">
               <div className="mobile-logo">
                    <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/iOS+icon+gray.svg" alt="" />
                </div>
                <div className="mobile-logo">
                    <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/Andriod+icon+gray.svg" alt="" />
                </div>
               </div>
                </div>
                <div className="col-6">
                <div className="first-iphone-video">
                    <video  loop autoplay="" muted><source src={thirdVdo} type="video/mp4"/></video>
                </div>
                </div>
                <div className="showcase-background-objects ease-translate">
                    <span className="pitt-orbs-bottom-center" value="10">
                        <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/sack4.png" alt="sack4"/>
                    </span>
                    <span className="pitt-orbs-bottom-left" value="2">
                        <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/sack.png" alt="sack"/>
                    </span>
                    <span className="pitt-orbs-right" value="10">
                        <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/sack1.png" alt="sack1"/>
                    </span>
                    <span className="pitt-orbs-top" value="10">
                        <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/sack2.png" alt="sack2"/>
                    </span>
                    <span className="pitt-orbs1" value="3">
                        <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/sack3.png" alt="sack3"/>
                    </span>
                </div>
            </div>
        </div>
    </div>
    {/* Helfie */}
    <div className="helfie-showcase-section parallax-wrap">
        <div className="container">
            <div className="row helfie-row">
                <div className="col-6 work-summary">
                    <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/helfieLogo.svg" alt="" />
                    <h1>Helfie</h1>
                    <div className="divider divider-blue"></div>
                    <p>Innovative app that diagnoses skin conditions, even skin cancer, using Artificial Intelligence.</p>
                    <div className="mobile-logos d-flex">
                        <div className="mobile-logo">
                    <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/iOS+icon+gray.svg" alt="" />
                        </div>
                         <div className="mobile-logo">
                            <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/Andriod+icon+gray.svg" alt="" />
                    </div>
               </div>
                </div>
                <div className="col-6 device-preview">
                    <div className="second-iphone-helfie-cover">
                    <img class src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/helfieiphone.png" alt="" />
                   </div>
                    <div className="second-iphone-video">
                        <video  loop autoplay="" muted><source src={fourthdVdo} type="video/mp4"/></video>
                    </div> 
                </div>
                <div className="showcase-background-objects">
                    <div className="overlay bg-overlay"></div>
                    <div className="overlay bg-overlay-2"></div>
                    <span className="blurred plus" value="10">
                        <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/plus.svg" alt="plus"/>
                    </span>
                    <span className="blurred plus-one" value="10">
                        <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/blurred1.png" alt="blurred-plus-one"/>
                    </span>
                    <span className="blurred plus-two" value="10">
                        <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/blurred2.png" alt="blurred-plus-two"/>
                    </span>
                    <span className="blurred plus-three" value="10">
                        <img className="svg-overlay" src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/blurred3.png" alt="blurred-plus-three"/>
                    </span>
                </div>
            </div>
        </div>
    </div>
    {/* Painimation */}
    <div className="painimation-showcase-section parallax-wrap">
        <div className="container">
            <div className="row">
                <div className="col-6 work-summary">
                <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/painimation-logo.svg" alt="" />
                <h1>Painimation</h1>
                <div className="divider divider-blue"></div>
                <p>Helps users get diagnosed of pains and ailments by assessing pain location, quality and intensity using images and animations.</p>
                <div className="mobile-logos d-flex">
                    <div className="mobile-logo">
                            <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/iOS+icon+gray.svg" alt="" />
                        </div>
                         <div className="mobile-logo">
                            <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/Andriod+icon+gray.svg" alt="" />
                    </div>
               </div>
                </div>
                <div className="col-6 device-preview">
                    <div className="third-iphone-painimation-cover">
                        <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/painimationBase.png" alt="" />
                    </div>
                    <div className="third-iphone-video">
                        <video  loop autoplay="" muted><source src={fifthVdo} type="video/mp4"/></video>
                    </div>
                </div>
                <div className="showcase-background-objects ease-translate">
                    <span className="pain-ball-1" value="10">
                        <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/painimationBall1.png" alt="pain-ball-1"/>
                    </span>
                    <span className="pain-ball-2" value="-5">
                        <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/painimationBall2.png" alt="pain-ball-2"/>
                    </span>
                    <span className="pain-ball-3" value="5">
                        <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/painimationBall3.png" alt="pain-ball-3"/>
                    </span>
                    <span className="pain-ball-4" value="-6">
                        <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/painimationBall4.png" alt="pain-ball-4"/>
                    </span>
                    <span className="pain-ball-5" value="-7">
                        <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/painimationBall5.png" alt="pain-ball-5"/>
                    </span>
                    <span className="pain-ball-6" value="3">
                        <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/painimationBall6.png" alt="pain-ball-6"/>
                    </span>
                </div>
            </div>
        </div>
    </div>
    {/* POKER SOCIETY */}
    <div className="pokerSociety-showcase-section parallax-wrap">
        <div className="container">
            <div className="row">
                <div className="col-6 work-summary">
                    <div className="poker-society-logo">
                        <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/poker-society-logo.png" alt="" />
                    </div>
                    <h1 className="text-white">POKER SOCIETY</h1>
                    <div className="divider divider-blue bg-white"></div>
                    <p className="text-white">Socializing Poker tournaments with stake funding and management.</p>
                    <div className="mobile-logos d-flex">
                    <div className="mobile-logo">
                            <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/android.svg" alt="" />
                        </div>
                         <div className="mobile-logo">
                            <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/ios.svg" alt="" />
                        </div>
                   </div>
                </div>
                <div className="col-6 device-preview">
                    <div className="fourth-iphone-pokerSociety-cover">
                        <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/poker-society-preview-device.png" alt="" />
                    </div>
                    <div className="fourth-iphone-video">
                    <video  loop autoplay="" muted><source src={sixthVdo} type="video/mp4"/></video>
                   </div>
               </div>
               <div className="showcase-background-objects ease-translate">
                <span className="chip-1" value="10">
                    <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/chip-1.png" alt="chip-1"/>
                </span>
                <span className="chip-2" value="-8">
                    <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/chip-2.png" alt="chip-2"/>
                </span>
                <span className="chip-3" value="10">
                    <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/chip-3.png" alt="chip-3"/>
                </span>
                <span className="chip-4" value="-4">
                    <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/chip-4.png" alt="chip-4"/>
               </span>
               <span className="chip-5" value="4">
                <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/chip-5.png" alt="chip-5"/>
                </span>
                <span className="chip-6" value="-5">
                    <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/chip-6.png" alt="chip-6"/>
                </span>
                <span className="chip-7" value="2">
                    <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/chip-7.png" alt="chip-7"/>
                </span>
               </div>
            </div>
        </div>
    </div>
     {/* medical center */}
     <div className="medical-center-showcase-section">
        <div className="container">
            <div className="row">
                <div className="col-6 work-summary">
                    <div className="medicalCenter-logo">
                    <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/upmc-logo.png" alt="" />
                    </div>
                    <h1>univ. of pittsburgh medical center</h1>
                    <div className="divider divider-blue"></div>
                    <p>iOS based Sickle Cell disease kiosk app for clinics, patients and research at the Univ. of Pittsburgh.</p>
                    <div className="mobile-logo">
                            <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/iOS+icon+gray.svg" alt="" />
                    </div>
                </div>
                <div className="col-6 device-preview">
                    {/* <div className="medical-center-cover">
                        <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/pittFrameV2.jpg" alt="" />
                    </div> */}
                    <div className="fifth-iphone-video">
                    <video  loop autoplay="" muted><source src={seventhVdo} type="video/mp4"/></video>

                    </div>

                </div>
                <div className="showcase-background-objects parallax-wrap">
                    <span className="pitt-orbs-bottom-center" value="2">
                        <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/pitt-orbs-bottom-center.png" alt="pitt-orbs-bottom-center"/>
                    </span>
                    <span className="pitt-orbs-bottom-left" value="2">
                        <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/pitt-orbs-bottom-left.png" alt="pitt-orbs-bottom-left"/>
                    </span>
                    <span className="pitt-orbs-right" value="-5">
                        <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/pitt-orbs-right.png" alt="pitt-orbs-right"/>
                    </span>
                    <span className="pitt-orbs-top" value="4">
                        <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/pitt-orbs-top.png" alt="pitt-orbs-top"/>
                    </span>
                    <span className="pitt-orbs1" value="5">
                        <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/pitt-orbs1.png" alt="pitt-orbs1"/>
                    </span>
                </div>
            </div>
        </div>
     </div>
     {/* CRRRUNCHTIME */}
     <div className="crranchTime-showcase-section parallax-wrap">
        <div className="container">
            <div className="row">
                <div className="col-6 work-summary">
                    <div className="crranchTime-logo">
                        <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/crunnnchtime-logo.svg" alt="" />
                    </div>
                    <h1 className="text-white">CRRRUNCHTIME</h1>
                    <div className="divider divider-blue"></div>
                    <p className="text-white">Capture and broadcast sports’ most thrilling moments, live as they happen.</p>
                </div>
                <div className="col-6 device-preview">
                <div className="fifth-iphone-crranchTime-cover">
                        <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/crrrunchtime-preview-device.png" alt="" />
                    </div>
                    <div className="fifth-iphone-video">
                        <video  loop autoplay="" muted><source src={eighthVdo} type="video/mp4"/></video>
                    </div>

                </div>
                <div className="showcase-background-objects">
                    <span className="ball-1" value="-10">
                        <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/ball-1.svg" alt="ball-1"/>
                    </span>
                    <span className="ball-2" value="2">
                        <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/ball-2.svg" alt="ball-2"/>
                    </span>
                    <span className="ball-3" value="2">
                        <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/ball-3.svg" alt="ball-3"/>
                    </span>
                    <span className="ball-4" value="5">
                        <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/ball-4.svg" alt="ball-4"/>
                    </span>
                    <span className="ball-5" value="5">
                        <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/ball-5.svg" alt="ball-5"/>
                    </span>
                </div>
            </div>
        </div>
     </div>
     {/* PATHEVO */}
     <div className="pathevo-showcase-section parallax-wrap">
        <div className="container">
            <div className="row">
                <div className="col-4 work-summary">
                    <div className="pathebo-logo">
                        <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/pathevo-logo.png" alt="" />
                    </div>
                    <h1>PATHEVO ADVISORS</h1>
                    <div className="divider divider-blue"></div>
                    <p>On-demand college admissions advisory, uberconference style.</p>
                </div>
                <div className="col-8 device-preview">
                    <div className="pathebo-showcase-cover">
                        <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/pathevo-advisors-preview-device.png" alt="" />
                    </div>
                    <div className="sixth-iphone-video">
                        <video  loop autoplay="" muted><source src={ninthVdo} type="video/mp4"/></video>
                    </div>
                </div>
                <div className="showcase-background-objects ease-translate">
                    <span className="cloud-1" value="5">
                        <span>
                            <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/cloud-1.png" alt="cloud-1"/>
                        </span>
                    </span>
                    <span className="cloud-2" value="5">
                            <span>
                                <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/cloud-2.svg" alt="cloud-2"/>
                           </span>
                    </span>
                    <span className="rocket-1" value="5">
                            <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/rocket-1.svg" alt="rocket-1"/>
                    </span>
                    <span className="rocket-2" value="2">
                            <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/rocket-2.svg" alt="rocket-2"/>
                    </span>
                    <span className="rocket-man" value="2">
                        <span>
                            <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/rocket-man.svg" alt="rocket-man"/>
                        </span>
                    </span>
                </div>
            </div>
        </div>
     </div>
     {/* TRUSTED BY */}
     <div className="trustedBy-showcase-section p-5">
        <div className="container">
            <h5 className="text-center pt-5">TRUSTED BY</h5>
            <ul className="brandLogos d-flex m-auto p-5">
                <li className="logo pe-5">
                    <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/stanford-logo.png" alt="" />
                </li>
                <li className="logo pe-5">
                    <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/sony-logo.png" alt="" />
                </li>
                <li className="logo pe-5">
                    <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/pepsi-logo.png" alt="" />
                </li>
                <li className="logo">
                    <img src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/nintendo-logo.png" alt="" />
                </li>
            </ul>
        </div>
     </div>
     {/* HIRE US SECTION */}
     <div className="hire-us-showcase-section">
        <div className="hire-us-text text-center">
            <p className="text-white fs-5">We tend to be the best at what we do</p>
            <h1 className="text-white">SOFTWARE OF TOMORROW STARTS WITH US</h1>
            <button className="border-0 rounded">HIRE US</button>
        </div>
     </div>
    </div>
  );
};

export default ShowCase;
