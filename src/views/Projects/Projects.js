import React from "react";
import "./Projects.scss";
import CardList from "../../components/CardList/CardList";
import {data} from '../../components/CardList/data';
import {Tween, Reveal} from 'react-gsap';


const Projects = () =>{
    return(
        <div className="projects-container">
            <div className="projects-title">
                <Reveal>
                    <Tween from={{opacity: 0, y: '100px'}} duration={1} ease="power2.out">
                        <p className="title" id="t1">Other Noteworthy Projects</p>
                    </Tween>
                </Reveal>
            </div>
            <div className="cards-container">
                <CardList data={data}/>
            </div>
            <div className="more-projects">
               
            </div>
        </div>
    )
}

export default Projects;