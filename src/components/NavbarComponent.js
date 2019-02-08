import React, { Fragment } from "react";
import { NavLink as NL } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";

export default class C_Navbar extends React.Component {
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
      <Fragment>
        <Navbar style={{marginBottom:"40px"}} expand="md">
          <div className="container">
              <NL className="navbar-brand" to="/">little redux</NL>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                <NL className="nav-link" to="/content_manage">Manage Content</NL>
                </NavItem>
                <NavItem>
                <NL className="nav-link" to="/about">About</NL>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </Fragment>
    );
  }
}
