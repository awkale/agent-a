import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Nav from '../components/Nav';

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <Nav />
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
