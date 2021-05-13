import React from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, NavbarBrand, NavLink} from 'reactstrap'
function Header() {
    
    return (
        <div>
            <Navbar calssName = "navbar" color="dark" dark expand="md">
                <NavbarBrand className = "brand">Easy Korea</NavbarBrand>
                
                <Nav className="ms-auto" navbar> 

                    <NavLink href="#" className = "navelements">Emergency</NavLink>
                    <NavLink href="#" className="navelements">Guides</NavLink>
                    <NavLink href="#" className="navelements">Forum</NavLink>
                </Nav>    
            </Navbar>

        </div>
    )
}

export default Header
