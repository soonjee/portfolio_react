import React from "react";
import styled from "styled-components";

const StyledBurger = styled.button`
    /* position: absolute;
    top: 50px;
    right: 50px; */
    top: 50px;
    right: 50px;
    position: fixed;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer; 
    padding: 0;
    z-index: 10;

    &:focus {
        outline: none;
    }

    div {
        width: 35px;
        height: 4px;
        margin-bottom: 5px;
        background: ${({ open }) => (open ? "#0D0C1D" : "#333")};
        /* border-radius: 5px; */
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;

    :first-child {
        transform: ${({ open }) => (open ? "rotate(35deg)" : "rotate(0)")};
    }

    :nth-child(2) {
        opacity: ${({ open }) => (open ? "0" : "1")};
        transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-35deg)" : "rotate(0)")};
        }
    }
`;

const Burger = ({ open, setOpen }) => {
    return (
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledBurger>
    );
};

export default Burger;
