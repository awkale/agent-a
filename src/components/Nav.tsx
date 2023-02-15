import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'
import React, { Component } from 'react'
import { classNames } from '../hooks/classNames'
import logo from '../images/AgentA-red-transparent.png'
import '../styles/nav.css'

class Nav extends Component {
  constructor(props) {
    super(props)
    this.toggleNav = this.toggleNav.bind(this)
    this.state = {
      hamburgerIsOpen: false,
    }
  }

  toggleNav() {
    this.setState((state) => ({
      hamburgerIsOpen: !state.hamburgerIsOpen,
    }))
  }

  render() {
    return (
      <nav className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 md:mb-20 ">
        <div className="w-32 ">
          <Link to="/">
            <img className="max-w-full h-auto" src={logo} alt="Agent A logo" />
          </Link>
        </div>
        <div className="py-1 px-3 block md:hidden self-end absolute top-[10px]" onClick={this.toggleNav}>
          <FontAwesomeIcon icon={faBars} className="w-6 h-6 " />
        </div>
        <ul className={classNames("list-none flex flex-col md:flex-row items-center mb-0 py-[10px] px-0 md:p-0 h-auto md:h-6 overflow-hidden", this.state.hamburgerIsOpen ? 'flex' : 'none')} >
          <li className="font-brand tracking-wider text-base">
            <Link
              className="nav-hover block md:inline uppercase p-2 md:pt-1 md:pb-[2px] md:px-4 ml-2 md:ml-7"
              activeClassName="active"
              to="/what-we-do"
            >
              What We Do
            </Link>
          </li>
          <li className="font-brand tracking-wider text-base">
            <Link className="nav-hover block md:inline uppercase p-2 md:pt-1 md:pb-[2px] md:px-4 ml-2 md:ml-7" activeClassName="active" to="/work">
              Work
            </Link>
          </li>
          <li className="font-brand tracking-wider text-base">
            <Link className="nav-hover block md:inline uppercase p-2 md:pt-1 md:pb-[2px] md:px-4 ml-2 md:ml-7" activeClassName="active" to="/agents">
              The Agents
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Nav
