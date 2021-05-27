import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Nav,
  Navbar,
  Container,
  NavbarBrand,
  NavLink,
  Collapse,
  NavbarToggler,
  NavItem,
} from "reactstrap";

function Footer({ user }) {
  return (
    <div className="fixed-bottom">  
    <Navbar color="dark" dark>
        <Container>
            <NavbarBrand>
                Made by Team Tamsaasoo. Leave feedback&nbsp;  
                <a href="https://forms.gle/q5BnvTfymGeg6oM56">here!</a>
            </NavbarBrand>
        </Container>
    </Navbar>
    </div>
  );
}

export default Footer;
