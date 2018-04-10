import React, { Component } from 'react';
import Embed from 'react-runkit';
import { connect } from 'react-redux';
import { addImport } from '../actions/index';
import '../styles/index.css';
import _ from 'lodash';



class JSPlayGround extends Component{

 constructor(props){
   super(props)

   this.state = { library: '/*Add imports here*/' };
 }

 componentDidMount(){
    if(this.props.packageName !== undefined){
       this.setState({ library: this.props.packageName })
    }
 }


  render(){

    
    return (
    <div className="embedFrame">
       <Embed
        source={ this.state.library }
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
