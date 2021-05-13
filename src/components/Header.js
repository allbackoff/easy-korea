import React, {useState} from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, NavbarBrand, NavLink, Collapse, NavbarToggler, NavItem} from 'reactstrap'

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar calssName = "navbar" dark expand="md" style = {{backgroundColor: 'teal'}}>
                <NavbarBrand className="brand" style={{ color: 'bisque' }}>Easy Korea</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen = {isOpen} navbar>
                <Nav className="ms-auto" navbar> 
                    <NavItem>
                    <NavLink href="#" className="navelements" style = {{color: 'bisque'}}>Emergency</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="#" className="navelements" style={{ color: 'bisque' }}>Guides</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="#" className="navelements" style={{ color: 'bisque' }}>Forum</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="#" className="navelements" style={{ color: 'bisque' }}>Login</NavLink>
                    </NavItem>
                </Nav>  
                </Collapse>
            </Navbar>

        </div>
    )
}

export default Header
