import React from 'react';
import { Navbar, NavbarBrand, Nav, NavLink } from 'reactstrap';

export default class Footer extends React.Component {
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
      <div id="footerTop">
        <Navbar >
          
          <NavbarBrand >Contact Me! </NavbarBrand>
          
            <Nav id='icon'>
              <NavLink href="#"><i className="fab fa-envelope-o" aria-hidden="true"></i></NavLink>
              <NavLink href="#"><i className="fab fa-github" aria-hidden="true"></i></NavLink>
              <NavLink href="#"><i className="fab fa-linkedin" aria-hidden="true"></i></NavLink>
              <NavLink href="#"><i className="fab fa-stack-overflow" aria-hidden="true"></i></NavLink>
              <NavLink href="#"><i className="fab fa-twitter  q" aria-hidden="true"></i></NavLink>
            </Nav>
        </Navbar>
      </div>
    );
  }
}