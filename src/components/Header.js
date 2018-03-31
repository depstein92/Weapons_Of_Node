import React, { Component } from 'react';
import '../styles/index.css';
import { Link } from 'react-router-dom';
import { NavDropdown, Nav, MenuItem, NavItem } from 'react-bootstrap';

class Header extends Component{

    render(){
     return (
       <Nav bsStyle="tabs" activeKey="1" >
       <NavItem eventKey={1} href="/home">
         Weapons of Node
       </NavItem>
        <NavDropdown eventKey="4" title="Menu" id="nav-dropdown">
          <MenuItem eventKey="4.1">
           <Link to="/">Home</Link>
          </MenuItem>
          <MenuItem eventKey="4.2">
           <Link to="/JSPlayGround">JSPlayGround</Link>
          </MenuItem>
          <MenuItem eventKey="4.3">Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4.4">Separated link</MenuItem>
        </NavDropdown>
       </Nav>
     );
   }
}

export default Header;
