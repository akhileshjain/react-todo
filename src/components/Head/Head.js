import React from 'react';
import './Head.css';

const head = () => {
   const menuBtnHandler = () => {
       document.getElementsByClassName('container')[0].classList.toggle("change");
       document.getElementsByClassName('header-dropdown-section')[0].classList.toggle("dropdown-visible");
    }
    return (
        <div className="head-main-section">            
            <a className="header-site-title" href="/#">@akhileshjain</a>
            <div className="head-links-section">
                <a className="header-links" href="/#about">About Me</a>
                <a className="header-links" href="/#projects">Projects</a>
                <a className="header-links" href="/#experience">Experience</a>
                <a className="header-links" href="/#skills">Skills</a>
                <a className="header-links" href="/#contact">Contact</a>
            </div>
            <div className="header-dropdown-section">
                <a className="header-dropdown-links" href="/#about">About Me</a>
                <a className="header-dropdown-links" href="/#projects">Projects</a>
                <a className="header-dropdown-links" href="/#experience">Experience</a>
                <a className="header-dropdown-links" href="/#skills">Skills</a>
                <a className="header-dropdown-links" href="/#contact">Contact</a>
            </div>
            <div className="container" onClick={menuBtnHandler}>
                <div className="bar1"></div>
                {/* <div className="bar2"></div> */}
                <div className="bar3"></div>
            </div>
        </div>
        );
}

export default head;