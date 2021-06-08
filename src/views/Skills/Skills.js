import React from "react";
import "./Skills.scss";
import {Reveal, Tween} from "react-gsap";

import one from "./images/js.svg";
import two from "./images/ts.svg";
import three from "./images/html.svg";
import four from "./images/css.svg";
import five from "./images/sass.svg";
import six from "./images/python.svg";
import seven from "./images/java.svg";
import eight from "./images/jsp-file.svg";
import nine from "./images/sql.svg";
import ten from "./images/react.svg";
import eleven from "./images/redux.svg";
import twelve from "./images/three.svg";
import thirteen from "./images/node.svg";
import fourteen from "./images/git.svg";
import fifteen from "./images/webpack.svg";
import sixteen from "./images/firebase.svg";
import seventeen from "./images/figma.svg";
import eighteen from "./images/jest.svg";


const skills = ["JavaScript", "TypeScript", "HTML5", "CSS3", "SASS", "Python", "Java", "Java Server Pages", "SQL", "React.js", "Redux", "Three.js", "Node.js", "Github", "Webpack", "Firebase", "Figma", "Jest"];

const nums = [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen];

const skillsList = skills.map((skill, index) =>
    <Reveal repeat>
        <Tween
            from={{ scale: 0.3}}
            stagger={0.5}
            duration={0.5}
            ease="bounce"
        >
            <div className="grid-item">
                <img src={nums[index]} alt="" className="logo"/>
                <p className="skill-name">{skill}</p>
            </div>
        </Tween>
    </Reveal>
)


const Skills = () =>{
    return(
        <div className="skills-container" id="skills">

            <div className="title-container">
                <Reveal>
                    <Tween from={{opacity: 0, y: '100px'}} duration={1.5} ease="power2.out">
                        <p className='t1'>Skills I've gained on my journey</p>
                    </Tween>
                </Reveal>
            </div>

            <div className="skills-grid-container">
                <div className="grid-container">
                    {skillsList}
                </div>
            </div>
        </div>
    )
}

export default Skills;