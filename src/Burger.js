import React from "react";
import styled from "styled-components";

const StyledBurger = styled.button`
    /* position: absolute;
    top: 50px;
    right: 50px; */
    position: fixed;
    top: 50px;
    right: 50px;
    /* flex-direction: column;
    justify-content: space-around; */
    width: 2rem;
    height: 2rem;
    padding: 0;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 10;

    &:focus {
        outline: none;
    }

    div {
        width: 30px;
        height: 3.2px;
        margin-bottom: 5px;
        background: ${({ open }) => (open ? "#F2F2F2" : "#333")};
        /* border-radius: 5px; */
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;

    :first-child {
        transform: ${({ open }) => (open ? "rotate(38deg)" : "rotate(0)")};
    }

    :nth-child(2) {
        opacity: ${({ open }) => (open ? "0" : "1")};
        transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-38deg)" : "rotate(0)")};
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
