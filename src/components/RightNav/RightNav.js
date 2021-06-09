import React from "react";
import styled from "styled-components";
import {Link} from "react-scroll";
import resume from "../../assets/resume.pdf";
import project from "../../assets/layers.svg";
import skills from "../../assets/skills.svg";
import about from "../../assets/about.svg";
import contact from "../../assets/contact.svg";
import res from "../../assets/resume.svg";

const Menu = styled.div`
    display: none;
    height: 100%;
    width: 60%;
    background-color: #ECF0F1;
    right:0;
    top:0;
    z-index: 2;
    overflow-x: hidden;
    overflow-y: hidden;
    justify-content: center;
    align-items:center;

    .darkmode2{
        height: 40px;
        width: 40px;
        display:flex;
    }

    @media (max-width: 780px){
        margin-top: 60px;
        position: fixed;
        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
        transition: transform 1s ease-in-out;
        display: ${({open}) => open ? 'flex' : 'none'};
    }

    .menuItems-container{
        margin-top: -100px;
        height: 50%;
        width: 50%;
        display:flex;
        flex-direction:column;
        justify-content: space-evenly;
        font-family: 'Josefin Sans', sans-serif;
        font-size: 1.2rem;
    }

    .right-item{
        width: 100%;
        height: 20%;
        display:flex;
        flex-direction:row;
        justify-content: center;
        align-items:center;

        &:hover{
            filter: invert(0.4) sepia(1) saturate(20) hue-rotate(180deg) brightness(1);
        }
    }

    .right-item:hover .rightnav-icon{
        display: flex;
        animation: fadeInUp 0.8s ease-in-out 0s forwards;
    }


    .resume{
        color: black;
    }

    .r-item{
        position: absolute;
        @media(max-width: 575px){
            font-size: 14px;
        }
        @media(max-width: 400px){
            font-size: 12px;
        }
        @media(max-height: 675px){
            font-size: 14px;
            @media(max-width: 400px){
                font-size: 12px;
            }
        }
        @media(max-height: 500px){
            font-size: 12px;
            @media(max-width: 400px){
                font-size: 10px;
            }
        }

        @media(max-height: 400px){
            font-size: 10px;
        }
    }
    .rightnav-icon{
        display: none;
        height: 30px;
        width: 30px;
        margin-right: 120px;

        @media(max-width: 575px){
            margin-right: 100px;
            height: 20px;
            width: 20px;
        }
        @media(max-width: 400px){
            height: 15px;
            width: 15px;
        }
        @media(max-height: 675px){
            height: 20px;
            width: 20px;
            @media(max-width: 400px){
                height: 15px;
                width: 15px;
            }
        }
        @media(max-height: 500px){
            height: 15px;
            width: 15px;
            @media(max-width: 400px){
                height: 10px;
                width: 10px;
            }
        }
        @media(max-height: 400px){
            height: 10px;
            width: 10px;
        }
    }

    @keyframes fadeInUp {
        from { 
          opacity: 0;
          -webkit-transform: translate3d(0, 100%, 0);
          transform: translate3d(0, 100%, 0);
        }
      
        to {
          opacity: 1;
          -webkit-transform: none;
          transform: none;
        }
      }

    


`;

const RightNav = ({open, handleClose}) =>{
    if(open){
        document.documentElement.style.overflow = "hidden";
        document.body.scroll = "no";
    }
    else{
        document.documentElement.style.overflowX = "hidden";
    }
    return(
        
                    <Menu open={open}>
                                <div className="menuItems-container">
                                    <Link className="right-item" activeClass="active" to="featured" spy={true} smooth={true} duration={1000} onClick={handleClose}>
                                        <img className="rightnav-icon" src={project} alt="" />
                                        <p className="r-item">Projects</p>
                                    </Link>

                                    <Link className="right-item" activeClass="active" to="skills" spy={true} smooth={true} duration={1000} onClick={handleClose}>
                                        <img className="rightnav-icon" src={skills} alt="" />
                                        <p className="r-item">Skills</p>
                                    </Link>

                                    <Link className="right-item" activeClass="active" to="about" spy={true} smooth={true} duration={1000} onClick={handleClose}>
                                        <img className="rightnav-icon" src={about} alt="" />
                                        <p className="r-item">About</p>
                                    </Link>

                                    <Link className="right-item" activeClass="active" to="contact" spy={true} smooth={true} duration={1000} onClick={handleClose}>
                                        <img className="rightnav-icon" src={contact} alt="" />
                                        <p className="r-item">Contact</p>
                                    </Link>

                                    <a href={resume} className="right-item resume">
                                        <img className="rightnav-icon" src={res} alt="" />
                                        <p className="r-item">Resume</p>
                                    </a>

                        
                                </div>
                    </Menu>
                
    )
}

export default RightNav;