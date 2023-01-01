import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Collapse,
} from 'reactstrap';
import './Header.scss';

const Header = ({ header }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <Fragment>
      <Navbar color='faded' light className={`navbar-wrapper ${header}`}>
        <NavbarBrand href='/' className='mr-auto'>
          <b className='text-white'>CCi</b>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className='mr-2' />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem className='NavItem'>
              <NavLink href='/' className='text-center text-white'>
                <b>Home</b>
              </NavLink>
            </NavItem>
            <NavItem className='NavItem'>
              <NavLink href='/cocoa' className='text-center text-white'>
                <b>Cocoa</b>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Fragment>
  );
};

Header.propTypes = {
  header: PropTypes.string,
};

export default Header;
