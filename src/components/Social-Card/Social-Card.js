import React from 'react';
import './Social-Card.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const card = () => {
    return (
        <div className="parent">
        <div className="sm-card-box">
        <div className="img-box">
            <img className="portfolio-img" width="72px" height="72px"alt="Akhilesh Jain" src={require('../../assets/akhilesh.jpg')}/>
        </div>
        <div className="right-box">
            <div className="info-box">
                <div className="name-link-box">
                    <div className="name">AKHILESH JAIN</div>
                    <div className="insta-link">@akhilrjain</div>
                </div>
                <div className="desc-box">
                    <div>Software Developer-SAP</div>
                    <div>Freelancer</div>
                </div>
                <div></div>
            </div>
            <div className="sm-links-box">
                <div>
                    <a href ="https://twitter.com/AkhileshJain91" target='_blank' rel="noopener noreferrer">
                     <img className="sm-img" alt="Twitter" src={require('../../assets/twitter.png')}/>
                    </a>
                </div>
                <div>
                    <a href ="https://github.com/akhileshjain" target='_blank' rel="noopener noreferrer">
                     <img className="sm-img" alt="Github" src={require('../../assets/github.png')}/>
                    </a>
                </div>
                <div>
                    <a href ="https://www.linkedin.com/in/jainakhilesh/" target='_blank' rel="noopener noreferrer">
                     <img className="sm-img" alt="LinkedIn" src={require('../../assets/linkedin-square-color.png')}/>
                    </a>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default card;