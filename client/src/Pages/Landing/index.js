import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
// import bgPic from '../../Assets/Img/headerImagecopy.jpeg'
import "./landing.css";
import Container from "react-bootstrap/Container";
import Button from "@material-ui/core/Button";


export default function Landing() {
  return (
    <div
      className="hero-container"
      style={{
        backgroundImage:
          "url(/assets/images/headerImagecopy.jpeg) center center/cover no-repeat",
      }}
    >
      <img src="/assets/images/headerImagecopy.jpeg" />
      <div className="hero-info" style={{borderRadius: "100px"}}>
        <h1>I-20 Fireworks</h1>
        <p>
          Located in Van Texas we are a locally owned firework stand with the
          goal of serving the community as convient as possible. With an assortment of options from
          Noveltiey Items, Fountains, Amazing Aerial Explosions and more we
          gurantee our products are of the higesht quality.
        </p>
        <div className="hero-btns">
          {/* <button>How It Works</button> */}
          {/* <Button variant="contained" color="default" style={{margin: "1%"}}>
            How It Works
          </Button> */}
          <Button variant="contained" color="primary" href='/search'>
            Start Shopping
          </Button>

        </div>
      </div>
    </div>
  );
}
