import React, {useState} from 'react';
import "./NavBar.scss";
import Headroom from "react-headroom";
import Burger from "../Burger/Burger";
import RightNav from "../RightNav/RightNav";
import logo from "../../assets/logo.svg";
import {Link} from "react-scroll";
import resume from "../../assets/resume.pdf";
import {Tween, Reveal} from "react-gsap";

const NavBar = () =>{
    const [open, setOpen] = useState(false);
    
    const handleClose = () =>{
        setOpen(false);
    }

    if(!open){
        document.documentElement.style.overflow = 'scroll';
        document.body.scroll = "yes";
    }
    return(
        <div>
            <Headroom className="headroom">
                <div className="logo-container">
                    <Link activeClass="active" to="landing" spy={true} smooth={true} duration={1000}>
                        <img src={logo} alt="" className="logo"/>
                    </Link>
                </div>
                <Reveal repeat>
                    <Tween
                        from={{opacity: 0, x:"100"}}
                        duration={1}
                        ease="power2.out"
                    >
                        <div className="links-container">
                        
                                <Link className="header-item" activeClass="active" to="featured" spy={true} smooth={true} duration={1000}>
                                    <p className="nav-item">Projects</p>
                                    <div className="hover-line"></div>
                                </Link>
            
                                <Link className="header-item" activeClass="active" to="skills" spy={true} smooth={true} duration={1000}>
                                    <p className="nav-item">Skills</p>
                                    <div className="hover-line"></div>
                                </Link>
                        
                                <Link className="header-item" activeClass="active" to="about" spy={true} smooth={true} duration={1000}>
                                    <p className="nav-item">About</p>
                                    <div className="hover-line"></div>
                                </Link>
                    
                                <Link className="header-item" activeClass="active" to="contact" spy={true} smooth={true} duration={1000}>
                                    <p className="nav-item">Contact</p>
                                    <div className="hover-line"></div>
                                </Link>
                        
                                <a href={resume} className="header-item resume">
                                    <p className="nav-item">Resume</p>
                                    <div className="hover-line"></div>
                                </a>
                        
                        </div>
                    </Tween>
                </Reveal>

                <div className="toggle-container">
                        <Burger className="burger" setOpen={setOpen} open={open}/>
                </div>
            </Headroom>
            <div className="right-nav-container">
                    <RightNav open={open} handleClose={handleClose}/>
            </div>
        </div>
    )
};

export default NavBar;
