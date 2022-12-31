import React, { Fragment, useState } from 'react';
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Collapse,
} from 'reactstrap';

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <Fragment>
      <Navbar color='faded' light className='mx-3'>
        <NavbarBrand href='/' className='mr-auto'>
          CCI
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className='mr-2' />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem className='px-2'>
              <NavLink href='/' className='text-end'>
                <b>Home</b>
              </NavLink>
            </NavItem>
            <NavItem className='px-2'>
              <NavLink href='/cocoa' className='text-end'>
                <b>Cocoa</b>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Fragment>
  );
};

export default Header;
