import React from "react";
import { Reveal, Tween } from "react-gsap";
import "./Loading.scss";
import logo from "../../assets/logo.svg";

const Loading = () =>{

    return(
        <div className="loading-container" style={{overflow: "hidden"}}>
            <div className="logo-container">
                <Reveal>
                    <Tween to={{scale: 0.7, repeat: "-1", yoyo:true}} duration={1}>
                        <img src={logo} alt="" className="logo"/>
                    </Tween>
                </Reveal>
            </div>
            
        </div>
    )
}

export default Loading;