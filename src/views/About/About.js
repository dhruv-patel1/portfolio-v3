import React from "react";
import "./About.scss";
import {Reveal, Tween} from "react-gsap";
import ACard from "../../components/About/ACard";
import BCard from '../../components/About/BCard';
import CCard from '../../components/About/CCard';

class About extends React.Component{ 

    constructor(props){
        super(props);
        this.state = {
            aState: true,
            bState: false,
            cState: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleUpClick = this.handleUpClick.bind(this);
        this.handleDownClick = this.handleDownClick.bind(this);
        this.handleUpClick2 = this.handleUpClick2.bind(this);
        this.handleDownClick2 = this.handleDownClick2.bind(this);
    }

    handleClick(){
        this.setState({
            aState: false,
            bState: true
        });
    }

    handleUpClick(){
        this.setState({
            aState: true,
            bState: false
        })
    }

    handleDownClick(){
        this.setState({
            bState: false,
            cState: true
        })
    }

    handleUpClick2(){
        this.setState({
            bState: true,
            cState: false
        })
    }

    handleDownClick2(){
        this.setState({
            aState: true,
            cState: false
        })
    }

    render(){   
        return(
            <div className="about-container" id="about">
                <div className="about-title">
                    <Reveal>
                        <Tween from={{opacity: 0, y: '100px'}} duration={1} ease="power2.out">
                            <p className="title" id="t1">About Me</p>
                        </Tween>
                    </Reveal>
                </div>
    
                <div className="about-comp">
                    <Reveal>
                        {this.state.aState && <ACard handleClick={this.handleClick}/>}
                        {this.state.bState && <BCard handleUpClick={this.handleUpClick} handleDownClick={this.handleDownClick}/>}
                        {this.state.cState && <CCard handleUpClick={this.handleUpClick2} handleDownClick={this.handleDownClick2}/>}
                    </Reveal>
    
                </div>
    
            </div>
    
        )
    }

}

export default About;