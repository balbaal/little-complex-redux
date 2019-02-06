import React, { Fragment } from "react";
import { NavLink as NL } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
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
            <NavbarBrand>
              <NL to="/">little redux</NL>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink>
                    <NL to="/content_manage">Manage Content</NL>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <NL to="/about">About</NL>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </Fragment>
    );
  }
}
