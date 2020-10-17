import React from 'react';
import './Head.css';

const head = () => {
    return (
        <div className="head-main-section">
            <a className="header-links" href="/#">About Me</a>
            <a className="header-links" href="/#projects">Projects</a>
            <a className="header-links" href="/#experience">Experience</a>
            <a className="header-links" href="/#skills">Skills</a>
            <a className="header-links" href="/#contact">Contact</a>
        </div>
        );
}

export default head;