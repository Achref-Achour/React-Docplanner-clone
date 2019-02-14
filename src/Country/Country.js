import React, { Component } from 'react';
import './Country.css';
const Cards = [
    {
        img:'https://www.docplanner.com/images/warsaw.png',
        name:'warsaw'
},
{
    img:'https://www.docplanner.com/images/barcelona.png',
    name:'Barcelona'
},
{
    img:'https://www.docplanner.com/images/istanbul.png',
    name:'Istanbul'
},
{
    img:'https://www.docplanner.com/images/rome.png',
    name:'Rome'
},
{
    img:'https://www.docplanner.com/images/mexico-city.png',
    name:'Mexico City'
},
{
    img:'https://www.docplanner.com/images/curitiba.png',
    name:'Curitiba'
}
]
class Country extends Component {
  render() {
    return (  <section className="pictures-country">
    <div className="pictures-text">
        <h1 className="pic-title">Improve the lives of millions.<br/> Change yours forever</h1>
        <p className="para">
            More than 500 team mates share our same vision, goals and passion.<br/> With offices in Warsaw,
            Barcelona,Istanbul, Rome, Czech Republic,<br/> Mexico City, Colombia and Curitiba, our search for great talent
            never <br/>stops.
        </p>
    </div>
    <div class="wbi-country">
           
            {Cards.map((el) =>
                <div className="wbirmc-country">
                    <div className="countries">
                        <img className="" src={el.img} />
                    </div>
                    <div className="access-country">
                        <a className="name-country" href="#">{el.name}</a>
                        <a className="see-openings" href="#">See openings</a>
                    </div>
                </div>
                )}
           
    </div>
   </section>
        );
  }
}

export default Country;