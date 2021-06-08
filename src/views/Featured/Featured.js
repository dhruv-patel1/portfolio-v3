import React from "react";
import "./Featured.scss";
import Fproject from "../../components/Featured/Fproject";
import Fproject2 from "../../components/Featured/Fproject2";
import {Tween, Reveal} from 'react-gsap';

const Featured = () =>{
    return(
        <div className="featured-container" id="featured">
        
            <div className="page-title">
                <Reveal>
                    <Tween from={{opacity: 0, y: '100px'}} duration={1.5} ease="power2.out">
                        <p className='t1' id="t1">What I've Built</p>
                    </Tween>
                </Reveal>
            </div>
            <Fproject/>
            <Fproject2/>
        </div>
    )
}

export default Featured;