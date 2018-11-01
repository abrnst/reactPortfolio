import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Navv extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div id="navbar">
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="name">Andrew Berndt</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="#aboutme">About me</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#portfolio">Portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://docs.google.com/document/d/1tHYXlsg8u3GT44AA1DDfUgenIFWN4GJjqy7q0Lm_6Xs/edit?usp=sharing">Resume</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}