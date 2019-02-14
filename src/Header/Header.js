import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return ( <header className="main-header">
        <div>
                <a href="#">
                    <img className="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="Docplanner Group"/>
                </a>
        </div>
        <div >
                
                    <a href="#" className="active" >About us</a>
                    <a href="#">Career</a>
                    <a href="#">Departments</a>
                
        </div>
        
        </header>
        );
  }
}

export default Header;
