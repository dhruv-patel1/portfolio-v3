import React from "react";
import styled from "styled-components";

const Burger = styled.div`
    width: 2rem;
    height: 2em;
    display: none;
    overflow-y: hidden;
    overflow-x: hidden;
    position: absolute;
    z-index: 20;
    

    @media (max-width: 780px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap; 
    }

    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({ open }) => open ? '#FF8561' : '#7B9095'};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;
        z-index: 20;

        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ open }) => open ? 0 : 1};
        }
        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`;

const BurgerMenu = ({setOpen, open}) =>{

    return(
        <>
            <Burger open={open} onClick={() => setOpen(!open)}>
                <div/>
                <div/>
                <div/>
            </Burger>
        </>
    );
}

export default BurgerMenu;