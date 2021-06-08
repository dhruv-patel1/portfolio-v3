import React,{useState, useRef, useEffect} from "react";
import "./BCard.scss";
import {Tween, Reveal, Timeline} from "react-gsap";
import WAVES from "vanta/dist/vanta.waves.min";

import down from "../../assets/down.svg";
import up from "../../assets/up.svg";
import pic from "../../assets/pic.png";
import bullet from "./assets/bullet.svg";

const BCard = ({handleDownClick, handleUpClick}) =>{

    const [effect, setEffect] = useState(0);
    const ref = useRef(null);

    useEffect(() =>{
        if(!effect){
            setEffect(WAVES({
                el: ref.current,
                color: 0x292923,
                waveSpeed: 0.50
            }))
        }
        return () =>{
            if(effect) effect.destroy();
        }
    }, [effect]);

    const skills = ["JavaScript", "React", "Redux", "HTML", "CSS/SCSS", "Python"];


    const list = skills.map((skill) =>
        
        <li className="list-item" key={Math.random()*100}>
            <img src={bullet} alt="" className="skill-bullet"/>
            <p className="skill-text">{skill}</p>
        </li>
    )
    
    return(
        <Reveal>
            <Tween from={{opacity: 0, y:"100px"}} duration={0.5}>
                <div className="b-main-container" ref={ref}>
                    <div className="b-inner-container">

                        <div className="up-div">
                            <Tween to={{y:"10", repeat: "-1", yoyo:true}}>
                                <img src={up} alt="" className="up-img" onClick={() => handleUpClick()}/>
                            </Tween>
                        </div>

                        <div className="content-div">
                            <div className="left">
                                <div className="left-content">
                                    <div className="summary">
                                        <Timeline>
                                            <Tween from={{x:-100, opacity: 0}} duration={0.5}>
                                            <p className="text">I'm Dhruv, an aspiring software engineer and a recent grad from Rutgers University (New Brunswick) with a B.S. in Computer Science.</p>
                                            </Tween>
                                            <Tween from={{x:-100, opacity: 0}} duration={0.5} delay={0.25}>
                                            <p className="text">Currently, I'm focused on front-end development and building various projects revolving around web and mobile development to gain hands on experience working with various tools & technologies. In the near future, I hope to develop reliable and innovative software that simplifies complex aspects of our lives for the better.</p>
                                            </Tween>
                                            <Tween from={{x:-100, opacity: 0}} duration={0.5} delay={0.25}>
                                            <p className="text">At the moment, I'm actively seeking any full-time or co-op opportunities to gain further exposure to industry processes while having the opportunity to contribute to current or next generation software products.</p>
                                            </Tween>
                                        </Timeline>
                                    </div>

                                    <div className="skills">
                                        <div className="text-box">
                                            <Tween from={{y: "100", opacity:0}} delay={2} duration={0.5}>
                                            <p className="text">These are a few of the technologies I've been working with recently:</p>
                                            </Tween>
                                        </div>
                                        <div className="grid-box">
                                            <Tween from={{x:"-100", opacity:0}} delay={2.5} >
                                                <ul className="skill-list">{list}</ul>
                                            </Tween>    
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <Tween from={{ scale: 0.3}} stagger={0.5} duration={2}>
                                    <div className="right-content">
                                        <img src={pic} alt="" className="pic"/>
                                    </div>
                                </Tween>
                            </div>
                        </div>

                        <div className="down-div">
                            <Tween to={{y:"-10", repeat: "-1", yoyo:true}}>
                                <img src={down} alt="" className="d-img" onClick={() => handleDownClick()}/>
                            </Tween>
                        </div>

                    </div>
                </div>
            </Tween>
        </Reveal>
    )
}

export default BCard;