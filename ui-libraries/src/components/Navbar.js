import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavbarText } from "reactstrap";
import { NavLink } from "react-router-dom";

function NavbarComponent(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args} expand="md" className="navbar-dark bg-primary">
        <NavbarBrand className="me-4">
          <NavLink className="text-light text-decoration-none" to={"/"}>
            Jual-In
          </NavLink>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto gap-3" navbar>
            <NavLink className="text-light text-decoration-none" to={"/"}>
              Home
            </NavLink>
            <NavLink className="text-light text-decoration-none" to={"/dashboard"}>
              Dashboard
            </NavLink>
            <NavLink className="text-light text-decoration-none" to={"/top"}>
              Top Rated
            </NavLink>
          </Nav>
          <NavbarText>
            <NavLink to={"/login"} className="text-decoration-none text-light">Login</NavLink>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
