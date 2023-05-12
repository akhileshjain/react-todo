import React, { Component } from 'react';
import './App.css';
import Head from '../Head/Head';
import About from '../About/About';
import Technologies from '../Technologies/Technologies';
import Experience from '../Experience/Experience';
import Project from '../Projects/Projects';
import MyForm from '../Contact-Form/Contact-Form';
import {Route, Router} from 'react-router-dom';
import { createBrowserHistory } from 'history';

const browserHistory = createBrowserHistory();

browserHistory.listen(location => {
    const { hash } = location;
    if (hash !== '') {
        // Push onto callback queue so it runs after the DOM is updated,
        // this is required when navigating from a different page so that
        // the element is rendered on the page before trying to getElementById.
        setTimeout(
             () => {
                const id = hash.replace('#', '');
                const headerOffset = document.getElementsByClassName('head-main-section')[0].offsetHeight;
                const element = document.getElementById(id);
                const elementPosition = element.offsetTop;
                const offsetPosition = elementPosition - headerOffset;
                if (element) {
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                  // element.scrollIntoView();
                }
            },0);
            if(window.innerWidth < 600) {
              document.getElementsByClassName('container')[0].classList.toggle("change");
              document.getElementsByClassName('header-dropdown-section')[0].classList.toggle("dropdown-visible");     
            }
    }
});
class App extends Component {
    state = { 
      skills: [{"id": "html.png", "name": "HTML5"},
               {"id": "css.png", "name": "CSS"},
               {"id": "javascript.png", "name": "JavaScript"},
               {"id": "angular.png", "name": "Angular"},
               {"id": "react-js.png", "name": "React, React-Native"},
               {"id": "node-js.png", "name": "Node.js"},
               {"id": "bootstrap-4.png", "name": "Bootstrap"},
               {"id": "sql-file.png", "name": "SAP HANA"},
               {"id": "mongodb.png", "name": "MongoDB"},
               {"id": "ado.png", "name": "Azure DevOps"},],
      projects: [{"name": "PepsiConnect B2B (MiNegocio+)", 
      "desc": `A mobile app offering food & beverage products in a convenient, one-stop shop solution for
                PepsiCo’s B2B customers`, 
      "photo": 'minegocio.png', 
      "url": "https://play.google.com/store/apps/details?id=com.pepsicoconsumer.minegocio&pli=1",
      "source": {"id":"closed.png"},
      "tech": [{"id": "react-js.png", "name": "React Native"}, {"id":"git.png", "name": "Git"}, {"id":"ado.png", "name": "Azure DevOps"} ]},
      {"name": "SAP Value Lifecycle Manager", 
                  "desc": `Software to improve financial and operational performance enabling the 
                           Intelligent Enterprise through SAP Performance Bench-marking`, 
                  "photo": 'vlm.jpg', 
                  "url": "https://vlm.cfapps.eu10.hana.ondemand.com/index.html#/home",
                  "source": {"id":"closed.png"},
                  "tech": [{"id": "angular.png", "name": "Angular"}, {"id":"node-js.png", "name": "Nodejs"}, {"id":"sap.png", "name": "SAP HANA"}, {"id":"git.png", "name": "Git"} ]},
                 {"name": "SAP Innovation Discovery",
                  "desc": "A self-service tool hosted on SAP Service Marketplace to help customers find out about the latest innovations coming out of SAP Portfolio.",
                  "photo": "innovation-discovery.jpg",
                  "source": {"id": "closed.png"},
                  "url":"https://go.support.sap.com/innovationdiscovery/",
                  "tech":[{"id":"sapui5.jpg", "name": "SAPUI5"}, {"id": "sap.png", "name": "SAP ABAP"}]},
                  {"name": "SAP Innovation and Feature Repository",
                   "desc": "A central authoring tool for the solution and product owners at SAP to maintain the innovations and features for their product.(requires access to SAP Network)",
                  "photo": "ifr.png",
                  "source": {"id": "closed.png"},
                  "url": "https://ifp.wdf.sap.corp/spt/cd/ifr/#/",
                  "tech":[{"id": "angular.png", "name": "Angular"}, {"id": "sap.png", "name": "SAP HANA"}]},
                  {"name": "COVID-19 Dashboard", 
                  "desc": 'This Dashboard shows latest COVID-19 cases in India and the world.', 
                  "photo": 'covid.jpg',
                  "source": {"id":"github.png", "url": "https://github.com/akhileshjain/covid-dashboard"},
                  "url": "https://covid-19-tracer.netlify.app/",
                  "tech": [{"id":"git.png", "name": "Git"}, {"id": "angular.png", "name": "Angular"}, {"id":"bootstrap-4.png", "name": "Bootstrap-4"}]} 
                ]};


      render() {
       let projects = (<div id="project" className="project-section">
         <div className="section-header">
           <div className="section-header-title" >Projects</div>
           <img alt="Projects" src={require('../../assets/project.png')} className="section-header-icon"/>
         </div>

         {this.state.projects.map(project => {
           return <Project 
                    name={project.name} 
                    desc={project.desc}
                    photo={project.photo}
                    url={project.url}
                    source={project.source}
                    tech={project.tech}>
                  </Project>
         })}
       </div>) 

      let skills = (<div className="technologies-box">
         <div className="section-header">
           <div className="section-header-title" >Skills</div>
           <img alt="Skills" src={require('../../assets/skill.png')} className="section-header-icon"/>
         </div>
        {this.state.skills.map(skill => {
          return <Technologies skillImg={skill.id}
                  skillName={skill.name}></Technologies>
        })}
      </div>);
      return(
        <Router history={browserHistory}>
        <div className="App">        
            <Head ></Head>
            <div id="about"><About></About></div>
            <div id="projects">{projects}</div>
            <div id="experience">
            <div className="section-header">
            <div className="section-header-title" >Experience</div>
              <img alt="Experience" src={require('../../assets/experience.png')} className="section-header-icon"/>
            </div>
            <Experience></Experience>
        </div>
            <div id="skills">{skills}</div>
            <div id="contact"><Route exact component={MyForm}></Route></div>
          </div>
        </Router>
      )
    }

}

export default App;