import React, { useState } from 'react';
import logo from '../../assets/pics/logo1 (1).png';
import './Navbar.css';
import {
    Collapse,Button,
    Navbar,NavbarToggler,
    NavbarBrand,Nav,
    NavItem,NavLink,
    UncontrolledDropdown,DropdownToggle,
    DropdownMenu,DropdownItem,
} from 'reactstrap';

const NavigationBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
            <Navbar expand='lg' fixed='top' color='light' className='ps-5 pe-5'>
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
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">
                            Contact Us
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
                </Nav>
                <div>
                    <Button color="primary" outline size="sm">Join Us</Button>
                </div>
            </Collapse>
        </Navbar>
        
    );
}
export default NavigationBar;