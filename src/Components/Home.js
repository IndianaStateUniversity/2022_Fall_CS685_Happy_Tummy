import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import offer from "../Assets/offer.png"
import offer2 from "../Assets/offer2.png"
import offer3 from "../Assets/offer3.png"
import { Link } from 'react-router-dom'

const images = [
  { url: offer },
  { url: offer2 },
  { url: offer3 },
];

const Home = () => {
  return (
    <div style={{textAlign:'-webkit-center'}}>
      <h3 className="text-center" style={{marginTop:"-20px"}}>Welcome to Happy Tummy</h3>
      <p className="text-center">We deliver Ingredients along with Recipes to your Doorstep </p>
      <br/>
      <div>
      <SimpleImageSlider
        width={900}
        height={350}
        images={images}
        showBullets={true}
        showNavs={true}
        slideDuration={1.5}
        autoPlay={true}
        autoPlayDelay={4}
      />
    </div>
      <br/>
     <div>
     <Link to="/signin" className="btn btn-secondary">Get Started <span>&#8594;</span></Link>
     </div>
    </div>
  )
}

export default Home
