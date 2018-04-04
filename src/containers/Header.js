import React, { Component } from 'react';
import '../styles/index.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { NavDropdown,
         Nav,
         MenuItem,
         NavItem,
         Glyphicon,
         Alert } from 'react-bootstrap';

class Header extends Component{
    constructor(props){
      super(props);


      this.state ={
         itemsInImports: [],
         show: false,
         itemsNotAdded: true
      };
      this.addImport = this.addImport.bind(this);
      this.handleDismiss = this.handleDismiss.bind(this);
      this.showImports = this.showImports.bind(this);
      this.itemDismiss = this.itemDismiss.bind(this);
   }

      addImport(){
      if(this.props.items.name !== undefined){
         this.setState({ show: true });
         this.setState({ itemsInImports:
            this.state.itemsInImports.concat([this.props.items.name])});

      } else {
         this.setState({ itemsNotAdded: false })
      }
   }

     itemDismiss(){
        this.setState({ itemsNotAdded: true })
     }

     handleDismiss(){
        this.setState({ show: false });
     }


     showImports(name){
      if(name === undefined){
         return <div> No Imports </div>;
      }
         return(
           <NavItem key={name}>
           { name }
           </NavItem>)
     }

    render(){
    
    const alert = this.state.show === false ? (<div></div>) : (
          <Alert className="header-alertbox"
                 bsStyle="info"
                 onMouseOver={this.handleDismiss}>
             <h4 className="alertbox-message" >
             Package Added!
             </h4>
         </Alert>)

    const itemsNotAdded = this.state.itemsNotAdded === true ? (<div></div>) :
          (<Alert className="items-not-added"
                  bsStyle="info"
                  onMouseOver={this.itemDismiss}>
            <h4 className="alertbox-message">
               No Packages Searched!
            </h4>
            </Alert>)

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
          { itemsNotAdded }
          <Glyphicon glyph="glyphicon glyphicon-plus" />
          </span>
        </NavItem>
        { alert }
        <NavDropdown
          className="imported-items"
          eventKey="4"
          title="Imported Packages"
          id="nav-dropdown">
      { Array.isArray(this.props.items) ?
         <div>No imported items</div> :
         this.state.itemsInImports.map(this.showImports) }
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
