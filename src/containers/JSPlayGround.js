import React, { Component } from 'react';
import Embed from 'react-runkit';
import { connect } from 'react-redux';
import { addImport } from '../actions/index';
import '../styles/index.css';

class JSPlayGround extends Component{

 constructor(props){
   super(props)

   this.state = { libraries: `let packages = require(packages)` };
 }


  render(){

   const packageName = this.props.packageName === undefined ?
         '' : this.props.packageName;
    console.log('this is packageName', packageName)
    console.log('this is props', this.props);
    return (
    <div className="embedFrame">
      <h1 className="embed-title"> My Javascript Playground </h1>
       <Embed
        source={ packageName }
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
            isLoading: state.itemsAreLoading,
            packageName: state.packageName
        };
    };

export default connect(mapStateToProps)(JSPlayGround);
