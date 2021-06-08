import React, { useState } from "react";
import styled from "styled-components";
import pic from "./images/meal-scouter.PNG";
import AwesomeSlider from "react-awesome-slider";
import AwsSliderStyles from "react-awesome-slider/src/styles";

import m2 from "./images/m2.PNG";

import s1 from "./images/react.svg";
import s2 from "./images/googlemaps.svg";
import s3 from "./images/edamam.svg";

import s4 from "../../assets/github.svg";
import s5 from "../../assets/link.svg";

import s6 from "./images/photo.svg";
import {Tween, ScrollTrigger} from "react-gsap";


const Project = styled.div`
    height: 38vh;
    width: 60vw;
    border-radius: 10px;
    margin: 20px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ECF0F1;

    @media (max-width: 870px){
        display: none;
    }

    .left{
        height: 100%;
        width: 55%;
        display: flex;
        justify-content: center;
        align-items: center;

        .pic{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 80%;
            width: 90%;

            @media(max-height: 800px){
                height: 70%;
                width: 80%;
            }
            @media(max-height: 550px){
                height: 60%;
                width: 70%;
            }
            

            .aws-btn {
                --slider-height-percentage: 60%;
                --slider-transition-duration: 700ms;
                --organic-arrow-thickness: 2px;
                --organic-arrow-border-radius: 0px;
                --organic-arrow-height: 15px;
                --organic-arrow-color: #000000;
                --control-button-width: 10%;
                --control-button-height: 25%;
                --control-button-background: transparent;
                --control-bullet-color: #f33d42;
                --control-bullet-active-color: #cf3438;
                --loader-bar-color: #FFFFFF;
                --loader-bar-height: 1px;
                }
        }
    }

    .right{
        height: 100%;
        width: 45%;
        display: flex;
        align-items: center;
        justify-content: center;


        .content{
            height: 90%;
            width: 88%;
            display: flex;
            flex-direction: column;

            .title{
                height: 35%;
                width: 100%;
                display: flex;
                flex-direction: column;

                .text{
                    font-family: 'Averia Serif Libre', cursive;
                    font-size: 18px;
                    color: #FF7133;

                    @media(max-width: 1050px){
                        font-size: 14px;
                    }
                    @media(max-height: 850px){
                        font-size: 13px;
                    }
                }


                .t2{
                    margin-left: 5%;
                    font-size: 36px;
                    color: black;

                    @media(max-width: 1050px){
                        font-size: 30px;
                    }
                    @media(max-height: 850px){
                        font-size: 28px;
                    }
                }

                .title-t1{
                    justify-content: start;
                    align-items: flex-end;
                    display: flex;
                    height: 40%;
                    width: 100%;
                }

                .title-t2{
                    justify-content: flex-start;
                    align-items: center;
                    display: flex;
                    height: 60%;
                    width: 100%;
                }
            }
            .description{
                height: 40%;
                width: 100%;
                background-color: #F4F9F9;
                display: flex;
                justify-content: center; 
                align-items: center;
                border-radius: 5px;

                .d-text{
                    padding: 0px 15px;
                    font-family: 'Averia Serif Libre', cursive;
                    font-size: 16px;
                    color: #606060;

                    @media(max-width: 1520px){
                        font-size: 14px;
                    }
                    @media(max-width: 1150px){
                        font-size: 12px;
                    }
                    @media(max-width: 965px){
                        font-size: 11px;
                    }
                    @media(max-height: 850px){
                        font-size: 11px;
                    }
                    @media(max-height: 650px){
                        font-size: 9.5px;
                    }
                    @media(max-height: 550px){
                        font-size: 8px;
                    }
                }

            }

            .stack{
                height: 13%;
                width: 100%;
                display: flex;
                justify-content: flex-start;
                align-items: center;

                .skill{
                    height: 70%;
                    width: 120px;

                    margin: 0px 5px;
                    border-radius: 4px;
                    display:flex;
                    justify-content: center;
                    align-items: center;

                    .logo{
                        height: 20px;
                        width: 20px;
                        margin-right: 5%;

                        @media(max-width: 1520px){
                            height: 18px;
                            width: 18px;
                        }
                        @media(max-width: 1380px){
                            height: 16px;
                            width: 16px;
                        }
                        @media(max-width: 1200px){
                            height: 14px;
                            width: 14px;
                        }
    
                        @media(max-width: 1080px){
                            margin-right: none;
                            height: 15px;
                            width: 15px;
                        }
                        @media(max-height: 650px){
                            height: 12px;
                            width: 12px;
                        }
                    }

                    .s{
                        font-size: 14px;
                        color: white;
                        font-weight: 500;

                        @media(max-width: 1550px){
                            font-size: 12px;
                        }
                        @media(max-width: 1380px){
                            font-size: 10px;
                        }
                        @media(max-width: 1200px){
                            font-size: 9px;
                        }
                        @media(max-width: 1080px){
                            display: none;
                        }
                    }

                }

                .one{
                    background-image: linear-gradient(-225deg, #5271C4 0%, #B19FFF 48%, #ECA1FE 100%);
                }

                .two{
                    background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);
                }

                .three{
                    background-image: linear-gradient(to top, #0ba360 0%, #3cba92 100%);
                    
                }


            }

            .links{
                height: 12%;
                width: 100%;
                display: flex;
                justify-content: flex-start;
                align-items: center;

                .svg{
                    height: 22px;
                    width: 22px;
                    margin: 0px 15px;
                    transition: 0.1s;

                    @media(max-width: 1080px){
                        height: 18px;
                        width: 18px;
                    }
                    @media(max-height: 850px){
                        height: 15px;
                        width: 15px;
                    }
                }

                .svg:hover{
                    height: 25px;
                    width: 25px;

                    @media(max-width: 1080px){
                        height: 20px;
                        width: 20px;
                    }
                    @media(max-height: 850px){
                        height: 17px;
                        width: 17px;
                    }
                }
            }
        }
        
    }

`;

const ProjectCard = styled.div`
    height: 35vh;
    width: 70vw;
    display: none;
    margin: 20px 0px;
    border-radius: 5px;
    background-color: #ECF0F1;
    color: #606060;

    @media(min-height: 800px){
        height: 35vh;

        @media(max-width: 700px){
            height: 30vh;
        }
        @media(max-width: 600px){
            height: 25vh;
        }
        @media(max-width: 550px){
            height: 23vh;
            width: 80vw;
        }
        @media(max-width: 380px){
            height: 18vh;
        }
    }

    @media(max-height: 800px){
        width: 55vw;
        @media(max-width: 700px){
            width: 60vw;
        }
    }


    @media (max-width: 870px){
        display: flex;
    }

    .card{
        height: 100%;
        width: 100%;
        border-radius: 5px;
        display: flex;
        flex-direction: column;

        .card-title{
            height: 22.5%;
            width: 100%;
            font-family: 'Averia Serif Libre', cursive;
            
            .t3{
                margin-left: 5%;
                font-size: 13px;
                color: black;
                
                @media(max-width: 600px){
                    font-size: 10px;
                }
                
                @media(max-width: 420px){
                    display: none;
                }
                @media(max-height: 870px){
                    display: none;
                }
            }

            .t4{
                margin-left: 5%;
                font-size: 22px;
                @media(max-width: 600px){
                    font-size: 17px;
                }
                @media(max-width: 380px){
                    font-size: 15px;
                }
            }
        }

        .card-description{
            height: 50%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Averia Serif Libre', cursive;
            font-size: 20px;

            .cd-text{
                margin: 0 10%;
            }

            @media(max-width: 800px){
                font-size: 16px;
            }
            @media(max-width: 700px){
                font-size: 14px;
            }
            @media(max-width: 625px){
                font-size: 12px;
            }
            @media(max-width: 513px){
                font-size: 11px;
            }
            @media(max-width: 380px){
                font-size: 10px;
            }
            @media(max-width: 350px){
                font-size: 9px;
            }

            @media(max-height: 900px){
                font-size: 12px;
            }
            @media(max-height: 600px){
                font-size: 10px;
            }
            @media(max-height: 700px){
                @media(max-width: 380px){
                    font-size: 9px;
                }
            }
            @media(max-height: 820px){
                @media(max-width: 380px){
                    font-size: 9px;
                }
            }

            
 

            
        }

        .other{
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            height: 15%;
            width: 100%;

            .skill{
                height: 70%;
                width: 120px;

                margin: 0px 5px;
                border-radius: 4px;
                display:flex;
                justify-content: center;
                align-items: center;

                @media(max-width: 600px){
                    width: 100px;
                }

                @media(max-width: 380px){
                    width: 60px;
                }

                .logo{
                    height: 20px;
                    width: 20px;
                    margin-right: 5%;

                    @media(max-width: 700px){
                        height: 18px;
                        width: 18px;
                    }
                    @media(max-width: 600px){
                        height: 15px;
                        width: 15px;
                    }
                    @media(max-width: 380px){
                        height: 12px;
                        width: 12px;
                    }
                    @media(max-height: 800px){
                        height: 15px;
                        width: 15px;
                    }
                    
                    
                }

                .s{
                    font-size: 14px;
                    color: white;
                    font-weight: 500;

                    @media(max-width: 700px){
                        font-size: 12px;
                    }
                    @media(max-width: 600px){
                        font-size: 11px;
                    }
                    @media(max-width: 380px){
                        display:none;
                    }
                    @media(max-height: 700px){
                        @media(max-width: 600px){
                            display:none;
                        }
                    }
                    @media(max-height: 750px){
                        @media(max-width: 415px){
                            display:none;
                        }
                    }

                }

            }

            .one{
                background-image: linear-gradient(-225deg, #5271C4 0%, #B19FFF 48%, #ECA1FE 100%);
            }

            .two{
                background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);
            }

            .three{
                background-image: linear-gradient(to top, #0ba360 0%, #3cba92 100%);
                
            }


        }
        }

        .othertwo{
            display: flex;
            align-items: center;
            height: 12.5%;
            width: 100%;

            .leftside{
                width: 50%;
                display: flex;
                justify-content: flex-start;
                margin: 0px 20px 0px 0px;

                .pic-icon{
                    height: 22px;
                    width: 22px;
                    margin: 0px 20px;
                    transition: 0.1s;

                    @media(max-width: 700px){
                        height: 18px;
                        width: 18px;
                    }
                    @media(max-width: 550px){
                        height: 15px;
                        width: 15px;
                    }
                    @media(max-width: 380px){
                        height: 12px;
                        width: 12px;
                    }
                    @media(max-height: 750px){
                        height: 14px;
                        width: 14px;
                    }
                }
                .pic-icon:hover{
                    height: 25px;
                    width: 25px;

                    @media(max-width: 700px){
                        height: 21px;
                        width: 21px;
                    }
                    @media(max-width: 550px){
                        height: 18px;
                        width: 18px;
                    }
                    @media(max-width: 380px){
                        height: 15px;
                        width: 15px;
                    }
                    @media(max-height: 750px){
                        height: 17px;
                        width: 17px;
                    }
                }
            }
            
            .rightside{
                width: 50%;
                display: flex;
                justify-content: flex-end;

                .svg{
                    height: 22px;
                    width: 22px;
                    margin: 0px 20px;
                    transition: 0.1s;

                    @media(max-width: 700px){
                        height: 18px;
                        width: 18px;
                    }
                    @media(max-width: 550px){
                        height: 15px;
                        width: 15px;
                    }
                    @media(max-width: 380px){
                        height: 12px;
                        width: 12px;
                    }
                    @media(max-height: 750px){
                        height: 14px;
                        width: 14px;
                    }
                }
    
                .svg:hover{
                    height: 25px;
                    width: 25px;

                    @media(max-width: 700px){
                        height: 21px;
                        width: 21px;
                    }
                    @media(max-width: 550px){
                        height: 18px;
                        width: 18px;
                    }
                    @media(max-width: 380px){
                        height: 15px;
                        width: 15px;
                    }
                    @media(max-height: 750px){
                        height: 17px;
                        width: 17px;
                    }
                }
            }

            
        }

    }

    .slider{
        height: 100%;
        width: 100%;
        border-top-left-radius: 5px;
            border-top-right-radius: 5px;

        .pic-container{
            height: 87.5%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            .aws-btn {
                --slider-height-percentage: 60%;
                --slider-transition-duration: 700ms;
                --organic-arrow-thickness: 2px;
                --organic-arrow-border-radius: 0px;
                --organic-arrow-height: 15px;
                --organic-arrow-color: #000000;
                --control-button-width: 10%;
                --control-button-height: 25%;
                --control-button-background: transparent;
                --control-bullet-color: #f33d42;
                --control-bullet-active-color: #cf3438;
                --loader-bar-color: #FFFFFF;
                --loader-bar-height: 1px;
                height: 85%;
                width: 90%;
                }

        }

        .o-two{
            height: 12.5%;
            width: 100%;
            display: flex;

            .leftside{
                width: 50%;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                margin: 0px 20px 0px 0px;

                .pic-icon{
                    height: 22px;
                    width: 22px;
                    margin: 0px 20px;
                    transition: 0.1s;

                    @media(max-width: 700px){
                        height: 18px;
                        width: 18px;
                    }
                    @media(max-width: 550px){
                        height: 15px;
                        width: 15px;
                    }
                    @media(max-width: 380px){
                        height: 12px;
                        width: 12px;
                    }
                   
                }
                .pic-icon:hover{
                    height: 25px;
                    width: 25px;

                    @media(max-width: 700px){
                        height: 21px;
                        width: 21px;
                    }
                    @media(max-width: 550px){
                        height: 18px;
                        width: 18px;
                    }
                    @media(max-width: 380px){
                        height: 15px;
                        width: 15px;
                    }
                }
            }
            
            .rightside{
                width: 50%;
                display: flex;
                align-items: center;
                justify-content: flex-end;

                .svg{
                    height: 22px;
                    width: 22px;
                    margin: 0px 20px;
                    transition: 0.1s;
                    
                    @media(max-width: 700px){
                        height: 18px;
                        width: 18px;
                    }
                    @media(max-width: 550px){
                        height: 15px;
                        width: 15px;
                    }
                    @media(max-width: 380px){
                        height: 12px;
                        width: 12px;
                    }
                }
    
                .svg:hover{
                    height: 25px;
                    width: 25px;

                    @media(max-width: 700px){
                        height: 21px;
                        width: 21px;
                    }
                    @media(max-width: 550px){
                        height: 18px;
                        width: 18px;
                    }
                    @media(max-width: 380px){
                        height: 15px;
                        width: 15px;
                    }
                }
            }

        }

    }


`;

const Fproject2 = () =>{

    const [open, setOpen] = useState(false);

    return(
        <ScrollTrigger trigger="#id">
        <Tween from={{x: -460, opacity:0}} duration={2} ease="power2.out">
        <div id="id">
        <Project>
            <div className="right">
                <div className="content">
                    <div className="title">
                        <div className="title-t1">
                            <p className="text t1">Featured Project</p>
                        </div>
                        <div className="title-t2">
                            <p className="text t2">Meal Scouter</p>
                        </div>
                    </div>

                    <div className="description">
                        <p className="d-text">
                        A conveninent solution to finding your next meal whether
                        it be at a restaurant or at home as you can quickly search
                        for nearby restaurants or recipes of whatever cuisine all in one place.
                        </p>
                    </div>

                    <div className="stack">
                        <div className="skill one">
                            <img src={s1} alt="" className="logo"/>
                            <p className="s">React</p>
                        </div>
                        <div className="skill two">
                            <img src={s2} alt="" className="logo"/>
                            <p className="s">Google Maps</p>
                        </div>
                        <div className="skill three">
                            <img src={s3} alt="" className="logo"/>
                            <p className="s">Edamam API</p>
                        </div>
                    </div>

                    <div className="links">
                        <a href="https://github.com/dhruv-patel1/Meal-Scouter" className="link">
                            <img src={s4} alt="" className="svg"/>
                        </a>
                        <a href="https://dhruv-patel1.github.io/Meal-Scouter/" className="link">
                            <img src={s5} alt="" className="svg"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="left">
                <div className="pic">
                    <AwesomeSlider cssModule={AwsSliderStyles} bullets={false} className="aws-btn">
                        <div data-src={pic} />
                        <div data-src={m2} />
                    </AwesomeSlider>
                </div>
            </div>
        </Project>

        <ProjectCard>
        {!open &&
            <div className="card">
                <div className="card-title">
                    <p className="t3">Featured Project</p>
                    <p className="t4">Meal Scouter</p>
                </div>
                <div className="card-description">
                    <p className="cd-text">
                        A conveninent solution to finding your next meal whether
                        it be at a restaurant or at home as you can quickly search
                        for nearby restaurants or recipes of whatever cuisine all in one place.
                    </p>
                </div>
                <div className="other">
                    <div className="skill one">
                        <img src={s1} alt="" className="logo"/>
                        <p className="s">React</p>
                    </div>
                    <div className="skill two">
                        <img src={s2} alt="" className="logo"/>
                        <p className="s">Google Maps</p>
                    </div>
                    <div className="skill three">
                        <img src={s3} alt="" className="logo"/>
                        <p className="s">Edamam API</p>
                    </div>
                </div>

                <div className="othertwo">
                    <div className="leftside">
                        <img src={s6} alt="" className="pic-icon" onClick={() => setOpen(!open)}/>
                    </div>
                    <div className="rightside">
                        <a href="https://github.com/dhruv-patel1/Meal-Scouter" className="link">
                            <img src={s4} alt="" className="svg"/>
                        </a>
                        <a href="https://dhruv-patel1.github.io/Meal-Scouter/" className="link">
                            <img src={s5} alt="" className="svg"/>
                        </a>
                    </div>
                </div>
            </div>
        }
            {open && 
            <div className="slider">
                
                <div className="pic-container">
                    <AwesomeSlider cssModule={AwsSliderStyles} bullets={false} className="aws-btn">
                            <div data-src={pic} />
                            <div data-src={m2} />
                        </AwesomeSlider>
                </div>

                <div className="o-two">
                        <div className="leftside">
                            <img src={s6} alt="" className="pic-icon" onClick={() => setOpen(!open)}/>
                        </div>
                        <div className="rightside">
                            <a href="https://github.com/dhruv-patel1/Meal-Scouter" className="link">
                                <img src={s4} alt="" className="svg"/>
                            </a>
                            <a href="https://dhruv-patel1.github.io/Meal-Scouter/" className="link">
                                <img src={s5} alt="" className="svg"/>
                            </a>
                        </div>
                    </div>
                </div>
            }
        </ProjectCard>
        </div>
        </Tween>
        </ScrollTrigger>

    )
}

export default Fproject2;
