import React from "react";
import styled from "styled-components";
import Card from "./Card";
import {Reveal, Tween} from "react-gsap";

const List = styled.ul`
    height: 100%;
    width: 70%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
    padding: 0;
    margin: 0;
    list-style-type: none;

    @media(max-width: 1400px){
        width: 75%;
    }

    @media(max-width: 1200px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media(max-width: 650px){
        grid-template-columns: repeat(1, 1fr);
    }
    li{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;

    }
`;

const CardList = ({data})  =>{
    const projects = data.map((item, index) =>
    <Reveal repeat>
        <Tween
            from={{ scale: 0.5}}
            stagger={0.5}
            duration={1}
            ease="power2.out"
        >
        <li key={item.key}>   
            <Card item={item} idx={index}/>
        </li>
        </Tween>
    </Reveal>
    );

    return(
        
            <List>{projects}</List>
        
    )
}

export default CardList;