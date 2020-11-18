import React, { Component } from 'react';
import './App.css';
import Head from '../Head/Head';
import About from '../About/About';
import Technologies from '../Technologies/Technologies';
import Project from '../Projects/Projects';
import MyForm from '../Contact-Form/Contact-Form';

class App extends Component {
    state = { 
      skills: [{"id": "html.png", "name": "HTML5"},
               {"id": "css.png", "name": "CSS"},
               {"id": "javascript.png", "name": "JavaScript"},
               {"id": "angular.png", "name": "Angular"},
               {"id": "react-js.png", "name": "React"},
               {"id": "node-js.png", "name": "Node.js"},
               {"id": "bootstrap-4.png", "name": "Bootstrap"},
               {"id": "sql-file.png", "name": "SAP HANA"},
               {"id": "mongodb.png", "name": "MongoDB"}],
      projects: [{"name": "SAP Value Lifecycle Manager", 
                  "desc": `Software to improve financial and operational performance enabling the 
                           Intelligent Enterprise through SAP Performance Bench-marking`, 
                  "photo": 'vlm.jpg', 
                  "url": "https://vlm.cfapps.eu10.hana.ondemand.com/index.html#/home",
                  "source": {"id":"closed.png"},
                  "tech": [{"id": "angular.png", "name": "Angular"}, {"id":"node-js.png", "name": "Nodejs"}, {"id":"sap.png", "name": "SAP HANA"}, {"id":"git.png", "name": "Git"} ]},
                 {"name": "COVID-19 Dashboard", 
                 "desc": 'This Dashboard shows latest COVID-19 cases in India and the world.', 
                 "photo": 'covid.PNG',
                 "source": {"id":"github.png", "url": "https://github.com/akhileshjain/covid-dashboard"},
                 "url": "https://covid-19-tracer.netlify.app/",
                 "tech": [{"id":"git.png", "name": "Git"}, {"id": "angular.png", "name": "Angular"}, {"id":"bootstrap-4.png", "name": "Bootstrap-4"}]},
                 {"name": "SAP Innovation Discovery",
                  "desc": "A self-service tool hosted on SAP Service Marketplace to help customers find out about the latest innovations coming out of SAP Portfolio.",
                  "photo": "innovation-discovery.jpg",
                  "source": {"id": "closed.png", "url": ""},
                  "url":"https://go.support.sap.com/innovationdiscovery/",
                  "tech":[{"id":"sapui5.jpg", "name": "SAPUI5"}, {"id": "sap.png", "name": "SAP ABAP"}]}
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
        <div className="App">
            <Head></Head>
            <About></About>
            {projects}
            {skills}
            <MyForm></MyForm>
          </div>
      )
    }

}

export default App;