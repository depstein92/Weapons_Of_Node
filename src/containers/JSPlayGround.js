import React, { Component } from 'react';
import Embed from 'react-runkit';
import { connect } from 'react-redux';
import { addImport } from '../actions/index';
import '../styles/index.css';
import _ from 'lodash';

class JSPlayGround extends Component{

 constructor(props){
   super(props)

   this.state = {
     library: [`const packageName = require('packageName')` ],
     imports: ''  };

 }

 componentWillMount(){
   this.setState({ library: this.state.library.concat([this.props.packageName]) });
 };

 componentDidMount(){
  if(this.props.libraryIsImported === true){

    let regExp = /require/gi;
    let numOfImports = this.state.library[1].match(regExp).length;
    console.log(numOfImports);
    let splitImports = _.split(this.state.library[1], '_', numOfImports);
    let deleteDuplicates = _.intersection(splitImports);

    const combineImports = (obj) => { return obj.join(''); };
    const finalImportString = combineImports(deleteDuplicates);

    this.setState({ imports: finalImportString })
  }
}

  render(){


  return (
    <div className="embedFrame">
       <Embed
        source={ `${ this.state.imports }` }
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
