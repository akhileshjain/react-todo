import React from 'react';
import './About.css';

const about = () => {
    var Typewriter = require('typewriter-effect');
    
    return(   
        <div className="about-section">
            <div className="about-me-img-box"><img alt="My Avatar" src={require('../../assets/me.svg')}/></div>
            <div className="info-desc-section">
                <div className="hi-text">Hi, I'm </div>
                <Typewriter options={{
                    strings: [' Akhilesh Jain', ' a software developer', ' a learner', ' an avid quizzer'],
                    autoStart: true,
                    loop: true,
                    skipAddStyles: false,
                    deleteSpeed: 50,
                    delay: 80
                }}
                />
            </div>
        </div> 
    );
}

export default about;