import React from 'react';
import logo from "../../assets/pics/logo1 (1).png";
import "./Navbar.css";
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';

const NavBar: React.FC = () => {
  return (
    <Navbar color="light" light expand="md">
      <div className="container">
        <NavLink className="navbar-brand" href="/">
          <img src={logo} alt="NGO Logo" />
        </NavLink>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about">About Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/causes">Causes</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/blog">Our Blog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/join">Volunteer</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact">Contact Us</NavLink>
          </NavItem>
        </Nav>
      </div>
    </Navbar>
  );
}

export default NavBar;
