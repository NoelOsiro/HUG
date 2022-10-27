import React, { useState } from 'react';
import logo from '../../logo.svg';
import './Navbar.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from 'reactstrap';

const NavigationBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (

        <Navbar expand='lg' fixed='top' color='light'>
            <NavbarBrand href="/">
                <img alt="logo" src={logo}/>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ms-auto me-auto" navbar>
                    <NavItem>
                        <NavLink href="/components/">HuG Community</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">
                            Projects
                        </NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Events
                        </DropdownToggle>
                        <DropdownMenu end>
                            <DropdownItem>Option 1</DropdownItem>
                            <DropdownItem>Checkout our Blog</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Reset</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">
                            Contact Us
                        </NavLink>
                    </NavItem>
                </Nav>
                <NavbarText>Simple Text</NavbarText>
            </Collapse>
        </Navbar>

    );
}

export default NavigationBar;