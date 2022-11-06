import React from 'react';
import './Crrrunchtime.css';

const Crrrunchtime = () => {
    return (
        <div className='crrunchtime-section'>
            <div className="row">
               <div className="col-6 crrrunchtimeImg colImg">
               <div className="crrrunchtimeText">
                <h1 className='text-white'>CRRRUNCHTIME</h1>
                <div className="divider divider-blue"></div>
                <p className='text-white'>Capture and broadcast sports’ most thrilling moments, live as they happen.</p>
                <div className="iconArrow firstIcon-arrow"></div>
                </div>
                </div>
               
                <div className="col-6">
                    <div className="row sideDividerRow">
                        <div className="col-6 bg-light">
                        <div className="cardText">
                                <h5>PATHEVO</h5>
                                <div className="divider divider-blue"></div>
                                <p>On-demand college admissions advisory, uberconference style.</p>
                                <div className="iconArrow secondIcon-arrow"></div>
                        </div>
                            
                        </div>
                        
                        <div className="col-6 firstcardImg crrrunchtimeImg">
                        <div className="firstdivider-fill firstcard-divider">
                        <div className="divider-fill"></div>
                        </div>
                        </div>
                        
                    </div>
                    <div className="row sideDividerRow">
                    <div className="col-6 secondcardImg crrrunchtimeImg">
                    <div className="seconddivider-fill secondcard-divider">
                        <div className="divider-fill"></div>
                    </div>
                    </div>
                    <div className="col-6 bg-light">
                            <div className="cardText">
                                <h5>OXFAM</h5>
                                <div className="divider divider-blue"></div>
                                <p>Explore opportunities as a traveler or tourist to make a difference in the places you visit.</p>
                                <div className="iconArrow secondIcon-arrow"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default Crrrunchtime;