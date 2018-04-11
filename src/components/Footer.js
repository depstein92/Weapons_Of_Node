import React from 'react';
import '../styles/index.css';
import { Link } from 'react-router-dom';

export default function Footer(){
  return (
    <div className="footer">
     <Link to="/facebook.com" className="fa fa-facebook fa-2x"></Link>
     <Link to="/twitter.com" className="fa fa-twitter fa-2x"></Link>
     <Link to="/instagram.com" className="fa fa-instagram fa-2x"></Link>
   </div>
  )
}
