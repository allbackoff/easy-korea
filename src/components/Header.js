import React from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, NavbarBrand, NavLink} from 'reactstrap'
function Header() {
    
    return (
        <div>
            <Navbar calssName = "navbar" dark expand="md" style = {{backgroundColor: 'teal'}}>
                <NavbarBrand className="brand" style={{ color: 'bisque' }}>Easy Korea</NavbarBrand>
                
                <Nav className="ms-auto" navbar> 

                    <NavLink href="#" className="navelements" style = {{color: 'bisque'}}>Emergency</NavLink>
                    <NavLink href="#" className="navelements" style={{ color: 'bisque' }}>Guides</NavLink>
                    <NavLink href="#" className="navelements" style={{ color: 'bisque' }}>Forum</NavLink>
                </Nav>    
            </Navbar>

        </div>
    )
}

export default Header
