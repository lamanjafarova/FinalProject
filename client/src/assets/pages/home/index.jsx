import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getData } from '../../../redux/userSlice/jobSlice';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Team_01 from "../../images/01_team.svg";
import Team_03 from "../../images/03_team.svg";
import Team_04 from "../../images/04_team.svg";
import { RxCaretRight } from "react-icons/rx";
import AppPuzzler from '../../components/app';
import CardCandidate from '../../components/card-candidate';
import GetStarted from '../../components/get-started';
import BlogNews from '../../components/blog-news';
import LoadingComp from '../../components/loading';
import "./index.scss"
import { useEffect } from 'react';
import LogIn from '../../components/log-in';
import { Link } from 'react-router-dom';
const HomePage = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs)

  useEffect(() => {
    dispatch(getData(""));
  }, []);
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
              <button className='btn-slider-1'><Link to={"/how-it-works"}>How it works</Link></button>
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
                <button className='btn-slider-start'><a href="#get-started">Get Started Now</a></button>
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
      <div className="container">
      <div className="search-job">
          <div className="find-job">
              <h1 className='find-h1'>FIND A JOB</h1>
          </div>
          <div className="input-search">
              <input type="text" placeholder='Keywords' className='keywords-input'/>
              <select name="" id="" className='specialisms'>
              <option className='search-option' value="All Specialisms">All Specialisms</option>
              <option className='search-option' value="Freelance">Freelance</option>
              <option className='search-option' value="Full Time">Full Time</option>
              <option className='search-option' value="Intership">Intership</option>
              <option className='search-option' value="Part Time">Part Time</option>
              <option className='search-option' value="Temporary">Temporary</option>
              </select>
              <select name="" id="" className='specialisms'>
              <option className='search-option' value="All Locations">All Locations</option>
              <option className='search-option' value="Freelance">Freelance</option>
              <option className='search-option' value="Full Time">Full Time</option>
              <option className='search-option' value="Intership">Intership</option>
              <option className='search-option' value="Part Time">Part Time</option>
              <option className='search-option' value="Temporary">Temporary</option>
              </select>
              <button className='search-btn'>Search</button>
          </div>


        {jobs.loading ? (
          <LoadingComp />
        ) : (
          <div className='cards'>
            {jobs.data?.map((element) => {
              return (
                <div className="card">
                  <div className="card-text-img">
                  <div className="card-head">
                    <h4 className='card-name'>{element?.name}</h4>
                    <p className='card-address'>{element?.address}</p>
                  </div>
                    <div className="card-img">
                        <img src={element?.company} alt="" />
                    </div>
                  </div>
                    <div className="category-time">
                      <p className='category-p'>{element?.categories}</p>
                      <p className='time-p'>{element?.time}</p>
                    </div>
                </div>
              )
            })}
          </div>
        )}
          ...
      </div>
      <div className="specialisms-jobs">
        <div className="text-specialisms">
          <div className="h1-div">
          <h1 className='text-h1-specialisms'>Brows Jobs by <br /> Specialism</h1>
          </div>
          <div className="p-div">
          <p className='p-text-specialisms'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
          </div>
        </div>
      </div>
      </div>
      <div className="app-puzzler">
        <AppPuzzler />
      </div>
      <div className="card-candidates">
        <CardCandidate />
      </div>
      <div id="get-started">
        <GetStarted />
        {/* <LogIn /> */}
      </div>
      <div className="blog-news">
        <BlogNews />
      </div>
      



    </div>
  )
}

export default HomePage