import React, { Component } from 'react';
import '../styles/style1.css';

class LandingPage extends Component{

 render(){
  return (
    <ul class="cb-slideshow">
  	 <li>
      <span></span>
  		<div>
       <h3>search packages, on us</h3>
      </div>
  	</li>
  	<li>
     <span></span>
     <div>
       <h3>focus on your code</h3>
     </div>
   </li>
  	<li>
     <span></span>
     <div>
       <h3>drink more coffee</h3>
     </div>
    </li>
  	<li>
     <span></span>
     <div>
       <h3>test in browser</h3>
     </div>
    </li>
  	<li>
     <span></span>
     <div>
       <h3>have fun, we all should</h3>
     </div>
    </li>
  	<li>
     <span></span>
     <div>
       <h3>spend more time thinking</h3>
     </div>
    </li>
  </ul>
    )
  }
}

export default LandingPage;
