import React, {useState, useEffect, useRef} from "react";
import { Reveal, Tween } from "react-gsap";
import BIRDS from "vanta/dist/vanta.birds.min";
import "./ACard.scss";

import down from "../../assets/down.svg";

const ACard = ({handleClick}) =>{

    const [effect, setEffect] = useState(0);
    const ref = useRef(null);

    useEffect(() =>{
        if(!effect){
            setEffect(BIRDS({
                el: ref.current,
                backgroundColor: 0x6c7284,
                color2: 0x262fca
            }))
        }
        return () =>{
            if(effect) effect.destroy();
        }
    }, [effect]);
    

    return(
        <Reveal>
            <Tween from={{opacity: 0}}>
                <div className="main-container" ref={ref}>
                    <div className="inner-container">
                        <div className="text-container">
                            <Reveal repeat>
                                <Tween from={{opacity: 0, y:"-100"}}>
                                    <p className="text">Discover who I am && what I do.</p>
                                </Tween>
                            </Reveal>
                        </div>

                        <div className="more-container">
                            <Tween to={{y:"-20", repeat: "-1", yoyo:true}}>
                                <img src={down} alt="" className="down-img" onClick={() => handleClick()}/>
                            </Tween>
                        </div>

                    </div>
                </div>
            </Tween>
        </Reveal>
    )
}

export default ACard;