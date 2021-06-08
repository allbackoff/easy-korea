import React, { useState } from "react";
import Login from "./Login";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavLink,
  Collapse,
  NavbarToggler,
  NavItem,
} from "reactstrap";

function Header({ user }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar
        className="navbar"
        dark
        expand="md"
        style={{ backgroundColor: "teal" }}
      >
        <NavbarBrand
          href="/easy-korea/#"
          className="brand"
          style={{ color: "bisque" }}
        >
          Easy Korea
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink
                href="/easy-korea/#/emergency"
                className="navelements"
                style={{ color: "bisque" }}
              >
                Emergency
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/easy-korea/#/guides"
                className="navelements"
                style={{ color: "bisque" }}
              >
                Guides
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/easy-korea/#/forum"
                className="navelements"
                style={{ color: "bisque" }}
              >
                Forum
              </NavLink>
            </NavItem>
            <NavItem>
              {user ? (
                <NavLink
                  href="/easy-korea/#/mypage"
                  className="navelements"
                  style={{ color: "bisque" }}
                >
                  My Page
                </NavLink>
              ) : (
                <NavLink
                  href="/easy-korea/#/login"
                  className="navelements"
                  style={{ color: "bisque" }}
                >
                  Sign up
                </NavLink>
              )}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
