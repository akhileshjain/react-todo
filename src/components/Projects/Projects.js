import React from 'react';
import './Projects.css';
// import TechIcons from '../Tech-Icons/Tech-Icons';

const projects = (props) => {
    let icons = null;
    if(props.tech) {
        icons = (<div className="proj-tech-icons-box">
            {props.tech.map(t => {
                return <img className="proj-right-tech-icons" alt="Technology Used" title={t.name}
                         src={require(`../../assets/${t.id}`)}/> 
            })}
        </div>);
    }


    let sourceCode = null;
    if(!props.source.url) {
        sourceCode = (<div className="repo-icons">
        {<img className="proj-right-tech-icons" alt="Closed Source Project" title="Closed Source"
        src={require(`../../assets/${props.source.id}`)}/>}
            </div>)} 
    else if(props.source.url) {
        sourceCode= (<div className="repo-icons">
            {<a href ={props.source.url} target='_blank' rel="noopener noreferrer" onClick ="return false;">
             <img alt="Github Repo" title="Github" className="proj-right-tech-icons" src={require(`../../assets/${props.source.id}`)}/>
             </a>}
        </div>)
    }
    
   const projectClickedHandler = (url) => {
        window.open(url);
    }
    return (
            <div className="project-card" onClick={() => projectClickedHandler( props.url)}>
                <div className="proj-img-box"><img alt="Project screenshot" className="proj-img" src={require(`../../assets/${props.photo}`)}/></div>
                <div className="proj-details">
                    <div className="proj-header-name">{props.name}</div>
                    <div className="proj-header-desc">{props.desc}</div>
                    <div className="tech-icons-box">
                        {icons}
                        <a href ={props.url} target='_blank' rel="noopener noreferrer">
                        <img className="proj-right-tech-icons" alt="Link" title="Click to Explore" src={require('../../assets/external-link.png')}/>
                        </a>
                        {sourceCode}
                    </div>
                </div>
            </div>
    );
}


export default projects;