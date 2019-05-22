import React from "react";
import image from "../images/Logo.png";
import "./Nav.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar fixed="top" className="nav-color" light expand="md">
          <NavbarBrand className="imgProp" href="/">
            <img alt="" src={image} className="d-inline-block" />
            <span className="logoName">Killy</span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="LinkColor" href="/components/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="LinkColor" href="#">
                  About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="LinkColor" href="#">
                  Contact Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="LinkColor" href="/privatePolicy">
                  Privacy Policy
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="LinkColor" href="/termsConditions">
                  Terms and Conditions
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
