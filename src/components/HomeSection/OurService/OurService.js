import React from 'react';
import './OurService.css';

const OurService = () => {
    return (
        <div className='serviceSection'>
            <div className='d-flex align-items-center'>
                <div className="row serviceRow">
                    <div className="col-6 serviceCol">
                        <div className="serviceText">
                            <h1>Our Service</h1>
                            <div className="divider divider-blue"></div>
                            <p>Intelia is redefining software development and delivery by focusing on a data-oriented engineering framework that unearths value for the enterprise and de-risks the engagement process.</p>
                        </div>
                    </div>
                    <div className="col-6 rightserviceCol">
                        <div className="row">
                            <div className="col-8 rightserviceCol">
                               <div className="rightserviceText">
                               <img className='pb-3' src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/TA.svg" alt="" />
                                <h5>Engineering Team Augmentation</h5>
                                <p>Build a team of top software engineers from Africa and Europe in days not months.</p>
                               </div>
                            </div>
                            <div className="col-4">
                                <div className="rightserviceText">
                                <img className='pb-3' src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/application-development-icon.svg" alt="" />
                                <h5>Application Development</h5>
                                <p>Enterprise-grade performant applications built for web and mobile consumption.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-2">
                            <div className="col-8 rightserviceCol">
                               <div className="rightserviceText">
                               <img className='pb-3' src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/machine-learning-icon.svg" alt="" />
                                <h5>Artificial Intelligence & Machine Learning</h5>
                                <p>Products built to extract maximum value, driven by machine power and unmatched intelligence.</p>
                               </div>
                            </div>
                            <div className="col-4">
                               <div className="rightserviceText">
                               <img className='pb-3' src="https://s3-us-west-2.amazonaws.com/intelia-ui-assets/images/analytics-icon.svg" alt="" />
                                <h5>Analytics & Big Data</h5>
                                <p>Next generation products driven by intelligent insights.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurService;