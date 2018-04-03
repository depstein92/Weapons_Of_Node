import React, { Component } from 'react';
import '../styles/index.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { NavDropdown,
         Nav,
         MenuItem,
         NavItem,
         Glyphicon } from 'react-bootstrap';

class Header extends Component{
    constructor(props){
      super(props);


      this.state ={
         itemsInImports: []
      };
      this.addImport = this.addImport.bind(this);
   }

      addImport(){
      if(this.props.items.name !== undefined){
         this.setState({ itemsInImports:
            this.state.itemsInImports.concat([this.props.items.name])});
      } else {
         alert('No items have been added');
      }
   }


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
          <MenuItem eventKey="4.3">
            <Link to="/Search">Search for Packages</Link>
          </MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4.4">Separated link</MenuItem>
        </NavDropdown>
        <NavItem
          eventKey={2}
          pullRight={ true }
          onClick={ this.addImport } >
          <span className="add-package-label">
          <span className="add-import-label">Add Import</span>
          <Glyphicon glyph="glyphicon glyphicon-plus" />
          </span>
        </NavItem>
        <NavDropdown
          className="imported-items"
          eventKey="4"
          title="Imported Packages"
          id="nav-dropdown">
      <NavItem>
      { this.state.itemsInImports}
      </NavItem>
        </NavDropdown>
       </Nav>
     );
   }
}

const mapStateToProps = (state) => {
        return {
            items: state.items,
            hasError: state.itemsHaveError,
            isLoading: state.itemsAreLoading
        };
    };


export default connect(mapStateToProps)(Header);
