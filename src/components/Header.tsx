import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';

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
  siteTitle: '',
};

export default Header;
