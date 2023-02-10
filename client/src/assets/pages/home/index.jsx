import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Team_01 from "../../images/01_team.svg";
import Team_03 from "../../images/03_team.svg";
import Team_04 from "../../images/04_team.svg";
import "./index.scss"
import { RxCaretRight } from "react-icons/rx";
const HomePage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div id='home'>
      <div className="home-page">
        <div className="container">
          <Slider {...settings}>
          <div>
            <div className="slider-img-text">
            <div className="slider-text">
              <h1 className='h1-slider'>Get your  dream job</h1>
              <h3 className='h3-slider'>We have <span className='span-slider'>69.368</span> great job <br /> offers you deserve!</h3>
              <button className='btn-slider-1'>How it works</button>
              <button className='btn-slider-2'>About Us <RxCaretRight /></button>
            </div>
            <img src={Team_01} alt="" className='slider-img'/>
            </div>
          </div>
          <div>
            <div className="slider-img-text-2">
          <img src={Team_03} alt="" className='slider-img-2'/>
              <div className="slider-text-2">
                <h1 className='slider-h1-2'>Your dream job <br /> just a click <br /> away</h1>
                <button className='btn-slider-start'>Get Started Now</button>
                <button className='btn-slider-detail'>Details <RxCaretRight /></button>
              </div>
            </div>
          </div>
          <div>
         <div className="slider-img-text-3">
         <div className="slider-text-3">
              <h1 className='h1-slider'>Find a perfect <br /> candidate</h1>
              <h3 className='h3-slider-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h3>
              <button className='btn-slider-list'>Candidate List</button>
              <button className='btn-slider-how'>How it works <RxCaretRight /></button>
            </div>
          <img src={Team_04} alt="" className='slider-img-3'/>
         </div>
          </div>
          </Slider>
        </div>
      </div>
      



    </div>
  )
}

export default HomePage