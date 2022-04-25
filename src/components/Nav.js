import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import logo from '../images/AgentA-white.png';

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5rem;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const ToggleButton = styled.div`
  padding: 4px 12px;
  display: none;
  align-self: flex-end;
  position: absolute;
  top: 10px;

  @media (max-width: 576px) {
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
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(250, 250, 250, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
`;

const NavLinkWrapper = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin-bottom: 0;
  padding: 0;

  @media (max-width: 576px) {
    flex-direction: column;
    padding: 10px 0;
    display: ${props => (props.isNavShown ? 'flex' : 'none')};
  }
`;

const NavLink = styled.li`
  font-family: noway_roundregular;
  letter-spacing: 1px;
  font-size: 1rem;
  line-height: 1rem;

  @media (max-width: 576px) {
    padding: 0;
    width: 100%;
  }

  a {
    color: #fff;
    text-transform: uppercase;
    padding: 2px 15px;
    margin-left: 30px;
    transition: all 0.2s ease;
    background: linear-gradient(
      180deg,
      transparent 50%,
      #53565A 0
    );
    background-size: 0 100%;

    @media (max-width: 576px) {
      padding: 10px 10px 7px;
      display: block;
    }

    :hover,
    &.active {
      color: #fff;
      text-decoration: none;
      background-size: 100% 100%;
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

class Nav extends Component {
  constructor(props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      hamburgerIsOpen: false,
    };
  }

  toggleNav() {
    this.setState(state => ({
      hamburgerIsOpen: !state.hamburgerIsOpen,
    }));
  }

  render() {
    return (
      <Navbar>
        <NavLogo>
          <Link to="/">
            <img src={logo} alt="Agent A logo" />
          </Link>
        </NavLogo>
        <ToggleButton onClick={this.toggleNav}>
          <ToggleIcon />
        </ToggleButton>
        <NavLinkWrapper isNavShown={this.state.hamburgerIsOpen}>
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
  }
}

export default Nav;
