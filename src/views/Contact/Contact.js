import React from "react";
import "./Contact.scss";

import copy from "../../assets/copyright.svg";
import mailbox from "./assets/mailbox.svg";

import lin from "./assets/linked-in.svg";
import git from "../../assets/github.svg";
import {Reveal, Tween} from "react-gsap";

import Form from "../../components/Form/Form";

const Contact = () =>{

    return(
        <div className="contact-container" id="contact">
            <div className="title-container">
                <Reveal>
                    <Tween from={{opacity: 0, y: '100px'}} duration={1.5} ease="power2.out">
                        <p className='t1'>Contact</p>
                    </Tween>
                </Reveal>
            </div>

            <div className="contact-content">
                <div className="contact-left">
                    <div className="mailimg-container">

                        <Reveal>
                            <Tween from={{opacity: 0, y: '50px'}} delay={0.25} ease="power2.out">
                                <img src={mailbox} alt="" className="mailbox"/>
                            </Tween>
                        </Reveal>
                        
                    </div>
                    <div className="header-container">
                        <Reveal>
                            <Tween from={{opacity: 0, y: '50px'}} delay={0.45} ease="power2.out">
                                <p className="contact-header">Get In Touch</p>
                            </Tween>
                        </Reveal>
                    </div>
                    <div className="msg-container">
                        <div className="msg-box">
                            <Reveal>
                                <Tween from={{opacity: 0, y: '50px'}} delay={0.65} ease="power2.out">
                                    <p className="msg">
                                        Please feel free to contact me in regards to opportunities, new connections, and further inquiry into my background.
                                    </p>
                                </Tween>
                            </Reveal>
                        </div>
                    </div>
                        <Reveal>
                            <Tween from={{opacity: 0}} delay={0.75} ease="power2.out">
                                <div className="links-container">
                                    <a href="https://www.linkedin.com/in/dhruv-patel-578a41176/">
                                        <img src={lin} alt="" className="socials"/>
                                    </a>
                                    <a href="https://github.com/dhruv-patel1">
                                        <img src={git} alt="" className="socials"/>
                                    </a>  
                                </div>
                            </Tween>
                        </Reveal>
                </div>
                <div className="contact-right">
                    <Form/>
                </div>
            </div>

            <div className="footer-content">
                <div className="copyright">
                    <img src={copy} alt="" className="copy-svg"/>
                    <p className="copy-msg">Copyright. All rights reserved.</p>
                </div>
            </div>
            
        </div>
    )
}

export default Contact;