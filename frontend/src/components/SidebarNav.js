import React, { Component } from "react";
import { withRouter } from "react-router";


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import "../css/SidebarNav.css";

class Sidebar_Nav extends Component {
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

  handleLogout = e => {
    e.preventDefault();
    this.props.logoutUser();
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <Navbar color="light" light expand="sm" className="sidebar">
          {/* whatever you do don't take it out */}
          <NavbarBrand href="" id="home">Knowledge Rocket</NavbarBrand>
          {/* stuff will break don't say I didn't warn you... */}
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/" id="nLink">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="rockets" id="nLink">Rockets</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="classes" id="nLink">Classes</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="billing" id="nLink">Billing</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="settings" id="nLink">Settings</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/" id="nLink" onClick={this.logoutUser}>
                  Log Out
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(Sidebar_Nav);
