import React, { Component } from 'react';
import Embed from 'react-runkit';
import { connect } from 'react-redux';
import '../styles/index.css';
import _ from 'lodash';

class JSPlayGround extends Component{

 constructor(props){
   super(props)

   this.state = { library: [`const packageName = require('packageName')` ] };
   this.getImport = this.getImport.bind(this);
 }

 componentWillMount(){
   this.setState({ library: this.state.library.concat([this.props.packageName]) });
 };

 getImport(){

  if(this.props.libraryIsImported === true){

  let regExp = /require/gi,
      numOfImports = this.state.library[1].match(regExp).length,
      splitImports = _.split(this.state.library[1], '_', numOfImports),
      deleteDuplicates = _.intersection(splitImports);

  const combineImports = (obj) => { return obj.join(''); };
  const finalImportString = combineImports(deleteDuplicates);

  return finalImportString
  } else {
     return '/*Place Imports Here*/';
    }
 }

  render(){

   return (
     <div className="embedFrame">
        <Embed
         source={ `${ this.getImport() }` }
         readOnly={ false }
         title='Hello World'
         minHeight="500px" />
     </div>
    )
  }
}


const mapStateToProps = (state) => {
        return {
            hasError: state.itemsHaveError,
            packageName: state.packageName,
            libraryIsImported: state.libraryIsImported
        };
    };

export default connect(mapStateToProps)(JSPlayGround);
