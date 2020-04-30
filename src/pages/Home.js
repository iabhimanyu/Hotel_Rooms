import React from "react";
//import { render } from "react-dom";
import Hero from "../components/Hero"
import Banner from "../components/Banner";
import {Link} from "react-router-dom"
import Services from "../components/Services"
import FeaturedRooms from "../components/FeaturedRooms";
//import Button from '../components/StyledHero'

export default function Home()
{
    
    return( 
    <div>
        <Hero >
            <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $100">
            <Link to="/rooms" className="btn-primary">Our rooms</Link>
            </Banner> 
        </Hero>
        <Services />

      
        <FeaturedRooms />
        
    </div>)       
    
}

