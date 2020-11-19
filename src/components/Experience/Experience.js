import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const experience = () => {
    return(<div>
<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#6246ea', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #6246ea' }}
    date="2018 - present"
    iconStyle={{ background: '#6246ea', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Software Developer - SAP</h3>
    <h4 className="vertical-timeline-element-subtitle">Gurgaon, IN</h4>
    <p>
      Working on SAP Value Lifecycle Management Tool 
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#6246ea', color: '#fff' }}
    date="2015 - 2018"
    iconStyle={{ background: '#6246ea', color: '#fff' }}
    // icon={<WorkIcon />}
  >     
    <h3 className="vertical-timeline-element-title">Associate Developer - SAP</h3>
    <h4 className="vertical-timeline-element-subtitle">Bangalore, IN</h4>
    <p>
      Front-End Development for internal SAP Tools
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2013 - 2015"
    contentStyle={{ background: '#6246ea', color: '#fff' }}
    iconStyle={{ background: '#6246ea', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Scholar@SAP</h3>
    <h4 className="vertical-timeline-element-subtitle">Bangalore, IN</h4>
    <p>
      Intership, Shadowing, Customer Support
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2019 - Present"
    contentStyle={{ background: '#6246ea', color: '#fff' }}
    iconStyle={{ background: '#6246ea', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Front-End Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Gurugram, IN</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2013 - 2015"
    contentStyle={{ background: '#6246ea', color: '#fff' }}
    iconStyle={{ background: '#6246ea', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Master of Technology</h3>
    <h4 className="vertical-timeline-element-subtitle">Master's Degree</h4>
    <p>
      Software Engineering
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2009 - 2013"
    contentStyle={{ background: '#6246ea', color: '#fff' }}
    iconStyle={{ background: '#6246ea', color: '#fff' }}
    // icon={require('../../assets/education.png')}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Technology</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor's Degree</h4>
    <p>
      Computer Science Engineering
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: '#6246ea', color: '#fff' }}
    // icon={<StarIcon />}
  />
</VerticalTimeline>
    </div>)    
}

export default experience;