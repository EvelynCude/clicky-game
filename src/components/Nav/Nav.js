import React from "react";
import "./Nav.css";

const Nav = props => (
    <nav className="navbar">
        <div className="container-fluid">
        <div className="navbar-header">
            <a className="navbar-brand" href="/">{props.title}</a>
        </div>
        
            <ul className="nav navbar-nav navbar-right">
             <li className="current-score">Current Score:  {props.score}</li>
             <li className="top-score">Top Score:  {props.topScore}</li>
            </ul>
        
        </div>
    </nav>
);

export default Nav;