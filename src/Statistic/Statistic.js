import React, { Component } from 'react';
import './Statistic.css';

const card = [
        {
            
            h3:'Leader in 10 countries',
            img:"https://www.docplanner.com/img/flag.png",
            p:"Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile",
            srct:"https://www.docplanner.com/img/flag.png 1x, https://www.docplanner.com/img/flag@2x.png 2x",
            class:"card-pad",
                
        },
        {
                h3:'30 million unique patients',
                img:"https://www.docplanner.com/img/patients.png",
                p:"visit us every month",
                srct:"https://www.docplanner.com/img/patients.png 1x, https://www.docplanner.com/img/patients@2x.png 2x",
                class:"card-padddd",
        },
        {
                h3:'1 million appointments',
                img:"https://www.docplanner.com/img/visits.png",
                p:"booked last month",
                srct:"https://www.docplanner.com/img/visits.png 1x, https://www.docplanner.com/img/visits@2x.png 2x",
                class:"card-padddd",
        },
        {
                h3:'Leader in 10 countries',
                img:"https://www.docplanner.com/img/flag.png",
                p:"Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile",
                srct:"https://www.docplanner.com/img/flag.png 1x, https://www.docplanner.com/img/flag@2x.png 2x",
                class:"card-haut",
        },
    
    ]
class Statistic extends Component {
  render() {
    return (  <section class="statistic">
    <div class="static-center">
        <div class="static-text">
            <h1>The world's biggest healthcare platform</h1>
            <p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
        </div>
        <div class="static-card">
        {card.map((el) =>
        <div className={el.class}>
                        <div class="stats__card">
                        <img scr={el.img} srcset={el.srct} />
                        <h3>{el.h3}</h3>
                        <p>
                        {el.p}
                        </p>
                        </div>  
        </div> 
                            )}
                        
        </div>

    </div>  
  </section>
        );
  }
}

export default Statistic;