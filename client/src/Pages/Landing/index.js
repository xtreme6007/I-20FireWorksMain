import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
// import bgPic from '../../Assets/Img/headerImagecopy.jpeg'
import './landing.css'
import Container from 'react-bootstrap/Container'
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import Button from '@material-ui/core/Button';



export default function Landing() {



    return(
     
   <div className= "hero-container" style={{backgroundImage: "url(/assets/images/headerImagecopy.jpeg) center center/cover no-repeat" }}>

        <img src="/assets/images/headerImagecopy.jpeg"/>
        <div className="hero-info">
            <h1>I-20 Fireworks</h1>
            <p>Located in Van Texas we are a locally owned firework stand with the goal of serving the DFW communitys as convient as possible. With that goal we are proud to announce that we will be offering delivery to most DFW locations this season. With an assortment of options from Noveltiey Items, Fountains, Amazing Aerial Explosions and more we gurantee our products are of the higesht quality. In order to place an order checkout the how it works tab.</p>
        <div className='hero-btns'>
            {/* <button>How It Works</button> */}
            <Button variant="contained" color="primary">
  How It Works
</Button>
            <button>Start Shopping</button>
        </div>
        </div>
   </div>

  
    )


}