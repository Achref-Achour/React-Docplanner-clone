import React, { Component } from 'react';
import Header from './Header/Header.js';
import Intro from './Intro/Intro.js';
import Services from './Services/Services.js';
import Company from './Company/Company.js';
import Statistic from './Statistic/Statistic.js';
import Country from './Country/Country.js';
import Footer from './Footer/Footer.js';

class App extends Component {
  render() {
    return (<div className="App">
      <Header/>
      <Intro/>
      <Services/>
      <Company/>
      <Statistic/>
      <Country/>
      <Footer/>    
    </div>
    );
  }
}

export default App;
