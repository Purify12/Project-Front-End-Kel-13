import React from 'react';
import { Link} from "react-router-dom";
import Logo from "../images/Logo.png";
import styled, {keyframes} from "styled-components";

const putar = keyframes`
    from {
    transform: rotate(0deg);
    }

    to {
    transform: rotate(360deg);
    }
    `;

    const StyledH1 = styled.h6`
    color: ${(props) => (props.primary ? "blue" : "red")};
    text-transform: uppercase;
    `;


    const StyledH1Center = styled(StyledH1)`
    animation: ${putar} 5s linear 2s infinite;
    text-align: center;
    `;

function Navlogin() {
    return (
        <>
        <nav class="navbar navbar-expand-md bg-dark navbar-dark">
   
            <Link to="/" class="flex items-center py-4 px-2">
                        <img src={Logo} alt="Logo" class="h-8 w-8" />
                        <StyledH1Center primary={false}><span class="font-semibold text-white text-sm">OnVocation</span></StyledH1Center>
            </Link>


            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link to="/login" class="nav-link">Login</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/" class="nav-link">Home</Link>
                    </li>
                </ul>
            </div>         
        </nav>
    </>
    )
}

export default Navlogin
