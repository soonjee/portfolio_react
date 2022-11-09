import React from "react";
import styled from "styled-components";

const StyledMenu = styled.nav`
    position: fixed;
    top: 0;
    right: 0;

    display: flex;
    width: 500px;
    height: 100vh;
    padding: 50px 50px 50px 70px;

    flex-direction: column;
    justify-content: center;
    
    background: #0A0A0A;
    text-align: left;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    z-index: 9;

    @media (max-width: 576px) {
        width: 100%;
    }

    a {
        font-size: 2rem;
        font-weight: 500;
        /* text-transform: uppercase; 대문자 */
        padding: 60px 0;
        letter-spacing: -2%;
        color: #F2F2F2;
        text-decoration: none;
        transition: color 0.3s linear;

        @media (max-width: 576px) {
        font-size: 1.5rem;
        text-align: center;
        }

        /* &:hover {
        color: #F2F2F2;
        } */
    }
`;

const Menu = ({ open }) => {
    return (
        <StyledMenu open={open}>
        <a href="/">
            <span role="img" aria-label="about us" />
            Home
        </a>
        <a href="/">
            <span role="img" aria-label="price" />
            Project
        </a>
        <a href="/">
            <span role="img" aria-label="contact" />
            About
        </a>
        </StyledMenu>
    );
};

export default Menu;
