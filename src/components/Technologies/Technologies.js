import React, {Fragment} from 'react';
import './Technologies.css';

const technologies = (props) => {
let tech = null;
tech = (<Fragment>
         {<div className="tech-single-box"><img src={require(`../../assets/${props.skillImg}`)} alt="" title=""/>
                <span>{props.skillName}</span>
        </div>}
</Fragment>);

return(<Fragment>
        {tech}
    </Fragment>)
}

export default technologies;