import React from "react";
import { Link} from "react-router-dom";
import Logo from "../images/Logo.png";
import styled, {keyframes} from "styled-components";
import { connect } from 'react-redux';
import { Icon } from '@iconify/react';
import shoppingcartIcon from '@iconify/icons-whh/shoppingcart';

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

    const Navbar = (props) => {

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
                        <Link to="/" class="nav-link">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/pencarian" class="nav-link">Pencarian</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/shop" class="nav-link">Shop</Link>
                    </li>                 
                    <li class="nav-item">
                        <Link to="/cart" class="nav-link">My cart</Link>
                    </li>
                    <li><Link to="/cart" class="nav-link"><Icon icon={shoppingcartIcon} inline={true} style={{ marginRight: '0px', }} /><span>{props.items.length}</span></Link></li>
                </ul>
                <ul class="navbar-right">
                    <li class="nav-item">
                        <Link to="/login" class="nav-link">Login</Link>
                    </li>
                </ul>
            </div>         
        </nav>
    </>
  );
}

const mapStateToProps = (state) => {
    return {
      items: state.addedItems,
    }
  }
  
  export default connect(mapStateToProps, null)(Navbar)
