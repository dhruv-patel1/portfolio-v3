import React from "react";
import styled from "styled-components";
import one from "./images/access.svg";
import two from "./images/runner.svg";
import three from "./images/vid.svg";
import four from "./images/chef.svg";
import five from "./images/port.svg";
import six from "./images/maze.svg";

import git from "./images/github.svg";
import link from "./images/link.svg";

const StyledCard = styled.div`
    height: 90%;
    width: 90%;
    background-color: #ECF0F1;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.2s ease-in;

    &:hover{
        transform: translate(0, -10px);

        @media(max-width: 1200px){
            transform: translate(0, -5px);
        }
    }

    .header{
        height: 20%;
        width: 100%;
        display: flex;

        .header-left{
            height: 100%;
            width: 60%;
            display: flex;
            align-items: center;

            .pic{
                height: 30px;
                width: 35px;
                margin-left: 10%;

                &:hover{
                    filter: invert(0.4) sepia(1) saturate(4.1) hue-rotate(111.6deg) brightness(0.99);
                    transition: 0.3s ease-in;
                }
                @media(max-height: 500px){
                    height: 16px;
                    width: 16px;
                }

                @media(max-width: 650px){
                    height: 19px;
                    width: 19px;
                }
                @media(max-width: 1200px){
                    height: 21px;
                    width: 21px;
                }

                @media(max-height: 700px){
                    height: 22px;
                    width: 22px;

                    @media(max-width: 1200px){
                        height: 20px;
                        width: 20px;
                    }
                    @media(max-width: 650px){
                        height: 12px;
                        width: 12px;
                    }
                }
                

                
            }
        }

        .header-right{
            height: 100%;
            width: 40%;
            display: flex;
            justify-content: flex-end;
            align-items: center;

            .link-img{
                height: 20px;
                width: 20px;
                margin-right: 20px;

                &:hover{
                    height: 22px;
                    width: 22px;
                    transition: 0.2s ease-in;
                    filter: invert(0.4) sepia(1) saturate(4.4) hue-rotate(151.2deg) brightness(0.97);

                    @media(max-width: 1200px){
                        height: 18px;
                        width: 18px;
                    }
                    @media(max-height: 500px){
                        height: 13px;
                        width: 13px;
                    }
    
                    @media(max-width: 650px){
                        height: 16px;
                        width: 16px;
                    }
    
                    @media(max-height: 700px){
                        height: 19px;
                        width: 19px;
                        @media(max-width: 1200px){
                            height: 16px;
                            width: 16px;
                        }
                        @media(max-width: 650px){
                            height: 11px;
                            width: 11px;
                        }
    
                    }
                    
                }

                @media(max-width: 1200px){
                    height: 16px;
                    width: 16px;
                }

                @media(max-width: 650px){
                    height: 14px;
                    width: 14px;
                }

                @media(max-height: 700px){
                    height: 17px;
                    width: 17px;
                    @media(max-width: 1200px){
                        height: 15px;
                        width: 15px;
                    }
                    @media(max-width: 650px){
                        height: 10px;
                        width: 10px;
                    }

                }
                @media(max-height: 500px){
                    height: 12px;
                    width: 12px;
                }

                
            }
        }
    }

    .title{
        height: 15%;
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        @media(max-width: 650px){
            height: 20%;
        }
        .name{
            font-size: 1.5rem;


            @media(max-width: 1200px){
                font-size: 1.2rem;
            }
            @media(max-width: 650px){
                font-size: 1rem;
            }

            @media(max-height: 700px){
                font-size: 1rem;

                @media(max-width: 650px){
                    font-size: 0.8rem;
                }
            }
        }

    }

    .description{
        height: 50%;
        width: 100%;
        display: flex;
        justify-content: center;
        font-family: 'Averia Serif Libre', cursive;

        @media(max-width: 650px){
            height: 40%;
        }

        .d-content{
            font-size: 1.1rem;
            padding: 0px 30px;
            margin-top: 5%;

            @media(max-width: 650px){
                margin-top: 1.5%;
            }
            @media(max-width: 1200px){
                font-size: 0.9rem;
            }
            @media(max-width: 900px){
                font-size: 0.8rem;
            }
            @media(max-width: 500px){
                font-size: 0.6rem;
            }

            @media(max-height: 700px){
                font-size: 0.9rem;

                @media(max-width: 1450px){
                    font-size: 0.7rem;
                }
                @media(max-width: 880px){
                    font-size: 0.6rem;
                }
                @media(max-width: 400px){
                    font-size: 0.45rem;
                }
            }



            @media(max-height: 500px){
                font-size: 0.7rem;

                @media(max-width: 1200px){
                    font-size: 0.6rem;
                }
                @media(max-width: 530px){
                    font-size: 0.5rem;
                }
                @media(max-width: 340px){
                    font-size: 0.45rem;
                }
            }
        }
    }

    .stack{
        height: 15%;
        width: 100%;
        background-color: #D7DEDF;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        font-family: 'Averia Serif Libre', cursive;

        @media(max-width: 650px){
            height: 20%;
        }

        .stack-list{
            height: 100%;
            width: 100%;
            padding: 0;  
            display: flex;
            align-items: center;
            justify-content: space-evenly;  
            color: #495253;

            .stack-item{

                &:hover{
                    transition: 0.2s ease-in;
                    filter: invert(0.4) sepia(1) saturate(4.1) hue-rotate(302.4deg) brightness(0.99);
                }

                @media(max-width: 1200px){
                    font-size: 0.9rem;
                }
                @media(max-width: 900px){
                    font-size: 0.8rem;
                }
                @media(max-width: 500px){
                    font-size: 0.6rem;
                }

                @media(max-height: 700px){
                    font-size: 0.9rem;

                    @media(max-width: 1200px){
                        font-size: 0.7rem;
                    }
                    @media(max-width: 650px){
                        font-size: 0.6rem;
                    }
                    @media(max-width: 400px){
                        font-size: 0.5rem;
                    }

                }
                @media(max-height: 500px){
                    font-size: 0.7rem;

                    @media(max-width: 650px){
                        font-size: 0.6rem;
                    }
                    @media(max-width: 530px){
                        font-size: 0.5rem;
                    }
                }

                
            }
        }
    }
`;

const Card = ({item, idx}) =>{

    let keys = ['a', 'b', 'c', 'd', 'e', 'f'];
    const stack = item.stack.map((sItem, index) =>
        <li className="stack-item" key={keys[index]}>{sItem}</li>
    );



    const ops = [one, two, three, four, five, six];
    return(
        <StyledCard>
            <div className="header">
                <div className="header-left">
                    <img src={ops[idx]} alt="" className="pic"/>
                </div>
                <div className="header-right">
                    <a className="link" href={item.gitLink}>
                        <img src={git} alt="" className="link-img"/>
                    </a>
                    {
                        item.demoLink && 
                        <a className="link" href={item.demoLink}>
                            <img src={link} alt="" className="link-img"/>
                        </a>
                    }
                </div>

            </div>
            <div className="title">
                <p className="name">{item.title}</p>
            </div>
            <div className="description">
                <p className="d-content">{item.description}</p>
            </div>
            <div className="stack">
                <ul className="stack-list">{stack}</ul>
            </div>
        </StyledCard>
    )
}

export default Card;