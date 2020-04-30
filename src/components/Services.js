import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";
import Title from "./Title";


class Service extends Component {
    state={
        services:[
            {
                icon:<FaCocktail />,
                title:"Free Cocktails",
                info:"Lorem ipsum dolor sit amet !"
            },
            {
                icon:<FaHiking />,
                title:"Endlesss Hiking",
                info:"Lorem ipsum dolor sit amet !"
            },
            {
                icon:<FaShuttleVan />,
                title:"Free Shuttle",
                info:"Lorem ipsum dolor sit amet !"
            }
        ]
    };
     render() {
        return (
            <div>
              <section className="services mt-4">
              <Title title="services">
               </Title> 
               <div className="services-center">
                    {this.state.services.map((item,index)=>{
                        return(
                         <article key={index} className="services">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                         </article>
                        );
                    })}
               </div>
               </section>  
            </div>
        );
    }
}

export default Service;