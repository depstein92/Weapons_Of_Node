import React, { Component } from 'react';
import Embed from 'react-runkit';
import '../styles/index.css';

class JSPlayGround extends Component{
  render(){
    const helloSource = `console.log('Welcome to my Javascript PlayGround!')`
    return (
      <div className="embedFrame">
      <h1 className="embed-title"> My Javascript Playground </h1>
       <Embed
        source={ helloSource }
        readOnly={ false }
        title='Hello World'
        minHeight="500px" />
      </div>
    )
  }
}
export default JSPlayGround;
