import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import logo from '../images/AgentA-red-transparent.png';

const Navbar = styled.div`
  display: flex;

  a {
    color: #fff;
  }
`;

const NavLogo = styled.div`
  width: 130px;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const Nav = () => (
  <Navbar>
    <NavLogo>
      <img src={logo} alt="Agent A logo" />
    </NavLogo>
    <Link to="/process">Process</Link>
    <Link to="/work">Work</Link>
    <Link to="/agents">The Agents</Link>
  </Navbar>
);

export default Nav;
