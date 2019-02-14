import React, { Component } from 'react';
import './Services.css';
const country = [
    {name:'Choose country',
    },
    {name:'Argentina',
    },
    {name:'Australia',
    },
    {name:'Brazil',
    },
    {name:'Chile',
    },
    {name:'Colombia',
    },
    {name:'Czech',
    },
    {name:'France',
    },
    {name:'Italy',
    },
    {name:'Mexico',
    },
    {name:'Peru',
    },
    {name:'Poland',
    },
    {name:'Portugal',
    },
    {name:'Spain',
    },
    {name:'Turkey',
    },
    {name:'UK',
    },
    
    
]

const service = [
    {
        h2:'For patients',
        h1:'Find a doctor, book a visit and solve any health-related doubt',
        select:country,
        img:"https://www.docplanner.com/img/screen-marketplace@2x.png",
        class:"services-patient",
    },
    {
        h2:'For patients',
        h1:'Find a doctor, book a visit and solve any health-related doubt',
        select:[],
        img:"https://www.docplanner.com/img/screen-saas@2x.png",
        class:"services-doctor",
    },

]
function TestSelect(props) {
    var l=props.select.length;
    if (l>0){
         return (
            <div class="style-select">
         <select>
        { props.select.map((el) =>
        <option>{el.name}</option>)}
         </select>
         </div>
         )}
         else return false ;
     }


class Services extends Component {
  render() {
    return (  
    <section className="services">
    {service.map((el) =>
        <div className="services-global">

    <div className={el.class}>
                            <h2>{el.h2}</h2>
                            <h1>{el.h1}</h1>
                            <TestSelect select={el.select}/>
                            <figure >
                            <img src={el.img}/>
                            </figure>
     </div>
     </div>
                            )}

</section>
        );
  }
}

export default Services;
