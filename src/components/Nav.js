import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import logo from '../images/AgentA-red-transparent.png';

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: noway_roundregular;
  letter-spacing: 1px;
  font-size: 1rem;
  line-height: 1rem;
  margin-bottom: 50px;
`;

const NavLinkWrapper = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin-bottom: 0;
`;

const NavLink = styled.li`
  a {
    color: #fff;
    text-transform: uppercase;
    padding: 20px;
    transition: all 0.2s ease;

    :hover {
      color: #fff;
      text-decoration: none;
      background: ${props => props.theme.coolGray11c};
    }
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
      <Link to="/">
        <img src={logo} alt="Agent A logo" />
      </Link>
    </NavLogo>
    <NavLinkWrapper>
      <NavLink>
        <Link to="/process">Process</Link>
      </NavLink>
      <NavLink>
        <Link to="/work">Work</Link>
      </NavLink>
      <NavLink>
        <Link to="/agents">The Agents</Link>
      </NavLink>
    </NavLinkWrapper>
  </Navbar>
);

export default Nav;
