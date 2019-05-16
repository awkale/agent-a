import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import logo from '../images/AgentA-white.png';

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5rem;
  @media (max-width: ${props => props.theme.sm}) {
    flex-direction: column;
  }
`;

const ToggleButton = styled.div`
  padding: 4px 12px;
  display: none;
  align-self: flex-end;
  position: absolute;

  @media (max-width: ${props => props.theme.sm}) {
    display: block;
  }
`;

const ToggleIcon = styled.span`
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  content: '';
  background: no-repeat center center;
  background-size: 100% 100%;
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
`;

const NavLinkWrapper = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin-bottom: 0;

  @media (max-width: ${props => props.theme.sm}) {
    flex-direction: column;
    padding: 10px 0;
  }
`;

const NavLink = styled.li`
  font-family: noway_roundregular;
  letter-spacing: 1px;
  font-size: 1rem;
  line-height: 1rem;

  @media (max-width: ${props => props.theme.sm}) {
    padding: 10px 0;
  }

  a {
    color: #fff;
    text-transform: uppercase;
    padding: 20px;
    transition: all 0.2s ease;

    :hover,
    &.active {
      color: #fff;
      text-decoration: none;
      background: ${props => props.theme.coolGray6c};
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
    <ToggleButton>
      <ToggleIcon />
    </ToggleButton>
    <NavLinkWrapper>
      <NavLink>
        <Link activeClassName="active" to="/what-we-do">
          What We Do
        </Link>
      </NavLink>
      <NavLink>
        <Link activeClassName="active" to="/work">
          Work
        </Link>
      </NavLink>
      <NavLink>
        <Link activeClassName="active" to="/agents">
          The Agents
        </Link>
      </NavLink>
    </NavLinkWrapper>
  </Navbar>
);

export default Nav;
