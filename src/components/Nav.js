import React from 'react';
import { Link } from 'gatsby';

const Nav = () => (
  <div className="nav-main">
    <Link to="/process">Process</Link>
    <Link to="/work">Work</Link>
    <Link to="/agents">The Agents</Link>
  </div>
);

export default Nav;
