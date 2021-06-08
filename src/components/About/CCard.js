import React, {useEffect, useState, useRef} from "react";
import "./CCard.scss";
import {Tween, Reveal} from "react-gsap";

import down from "../../assets/down.svg";
import up from "../../assets/up.svg";
import FOG from "vanta/dist/vanta.fog.min";

import gaming from "./assets/controller.svg";
import gaming1 from "./assets/gaming.jpg";
import fitness from "./assets/dumbbell.svg";
import fitness1 from "./assets/fitness.jpg";
import anime from "./assets/goku.svg";
import anime1 from "./assets/anime.jpg";
import dev from "./assets/dev.svg";
import dev1 from "./assets/webdev.jpg";
import movies from "./assets/movie.svg";
import movies1 from "./assets/movies.jpg";
import hike from "./assets/hiking.svg";
import hike1 from "./assets/hiking.jpg";


const CCard = ({handleUpClick, handleDownClick}) =>{

    const icons = [gaming, fitness, anime, dev, movies, hike];
    const bgs = [gaming1, fitness1, anime1, dev1, movies1, hike1];
    const names = ["Gaming", "Fitness", "Anime", "Web Development", "Movies", "Hiking"];

    const interests = icons.map((icon, index) =>
        
                <li key={Math.random()*100} className="interests-item">
                        <div className="inner-container" style={{backgroundImage: `url(${bgs[index]})`, backgroundPosition: "center"}}>
                            
                            <div className="inner-inner-container">
                                <Reveal>
                                    <Tween from={{y: 50, opacity:0}} delay={0.25}>
                                        <img src={icon} alt="" className="item-svg"/>
                                        <p className="item-name">{names[index]}</p>
                                    </Tween>
                                </Reveal>
                            </div>
                        </div>
                </li>
    )

    const [effect, setEffect] = useState(0);
    const ref = useRef(null);

    useEffect(() =>{
        if(!effect){
            setEffect(FOG({
                el: ref.current,
                highlightColor: 0xffffff,
                midtoneColor: 0x0,
                lowlightColor: 0x616161,
                baseColor: 0x525252
            }))
        }
        return () =>{
            if(effect) effect.destroy();
        }
    }, [effect]);



    return(
        <Reveal>
            <Tween from={{opacity: 0, y:"100px"}} duration={0.5}>
                <div className="c-main-container" ref={ref}>
                    <div className="c-inner-container">

                        <div className="c-up-div">
                            <Tween to={{y:"10", repeat: "-1", yoyo:true}}>
                                <img src={up} alt="" className="c-up-img" onClick={() => handleUpClick()}/>
                            </Tween>
                        </div>

                        <div className="c-content-div">
                            <div className="title-container">
                                <Reveal repeat>
                                    <Tween from={{opacity: 0, y:"-50"}}>
                                        <p className="text">Some of my Interests</p>
                                    </Tween>
                                </Reveal>
                            </div>
                            <div className="cardlist-container">
                                <Reveal>
                                    <Tween
                                        from={{ scale: 0.3, opacity:0}}
                                    >
                                        <ul className="card-list">
                                            {interests}
                                        </ul>
                                    </Tween>
                                </Reveal>
                            </div>
                            
                        </div>

                        <div className="c-down-div">
                            <Tween to={{y:"-10", repeat: "-1", yoyo:true}}>
                                <img src={down} alt="" className="c-d-img" onClick={() => handleDownClick()}/>
                            </Tween>
                        </div>

                    </div>
                </div>
            </Tween>
        </Reveal>
    )
}

export default CCard;