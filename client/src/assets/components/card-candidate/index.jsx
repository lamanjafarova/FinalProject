import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./index.scss"
import Author1 from "../../images/author1.jpg"
import Author2 from "../../images/author2.jpg"
import Author3 from "../../images/author3.jpg"
import { FaQuoteLeft } from "react-icons/fa"; 

const CardCandidate = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
  return (
    <div className='card-candidate'>
        <div className="container">
            <div className="candidate-text">
                <div className="h1-card-candidate">
                <h1 className='candidate-h1'>A Few Words from <br /> Happy Candidates</h1>
                </div>
                <div className="p-card-candidate">
                <p className='p-candidate'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

            </div>
            <div className="cards">
            <Slider {...settings}>
          <div>
            <div className="card">
                <div className="quote-and-p">
                <FaQuoteLeft className='icon'/>
                <p className='card-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua in voluptate velit esse cillum.</p>
                </div>
                <div className="author">
                    <div className="author-img">
                        <img src={Author1} alt="" className='image-author'/>
                    </div>
                    <div className="author-text">
                        <h6 className='card-h6'>Philip Demarco</h6>
                        <p className='card-p-2'>Copywriter</p>
                    </div>
                </div>
            </div>
          </div>
          <div>
          <div className="card">
                <div className="quote-and-p">
                <FaQuoteLeft className='icon'/>
                <p className='card-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua in voluptate velit esse cillum.</p>
                </div>
                <div className="author">
                    <div className="author-img">
                        <img src={Author2} alt="" className='image-author'/>
                    </div>
                    <div className="author-text">
                        <h6 className='card-h6'>Angelina Johnson</h6>
                        <p className='card-p-2'>Graphic Designer</p>
                    </div>
                </div>
            </div>
          </div>
          <div>
          <div className="card">
                <div className="quote-and-p">
                <FaQuoteLeft className='icon'/>
                <p className='card-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua in voluptate velit esse cillum.</p>
                </div>
                <div className="author">
                    <div className="author-img">
                        <img src={Author3} alt="" className='image-author'/>
                    </div>
                    <div className="author-text">
                        <h6 className='card-h6'>Peter Spenser</h6>
                        <p className='card-p-2'>Marketing Director</p>
                    </div>
                </div>
            </div>
          </div>
          <div>
          <div className="card">
                <div className="quote-and-p">
                <FaQuoteLeft className='icon'/>
                <p className='card-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua in voluptate velit esse cillum.</p>
                </div>
                <div className="author">
                    <div className="author-img">
                        <img src={Author1} alt="" className='image-author'/>
                    </div>
                    <div className="author-text">
                        <h6 className='card-h6'>Philip Demarco</h6>
                        <p className='card-p-2'>Copywriter</p>
                    </div>
                </div>
            </div>
          </div>
          <div>
          <div className="card">
                <div className="quote-and-p">
                <FaQuoteLeft className='icon'/>
                <p className='card-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua in voluptate velit esse cillum.</p>
                </div>
                <div className="author">
                    <div className="author-img">
                        <img src={Author2} alt="" className='image-author'/>
                    </div>
                    <div className="author-text">
                        <h6 className='card-h6'>Angelina Johnson</h6>
                        <p className='card-p-2'>Graphic Designer</p>
                    </div>
                </div>
            </div>
          </div>
          <div>
          <div className="card">
                <div className="quote-and-p">
                <FaQuoteLeft className='icon'/>
                <p className='card-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua in voluptate velit esse cillum.</p>
                </div>
                <div className="author">
                    <div className="author-img">
                        <img src={Author3} alt="" className='image-author'/>
                    </div>
                    <div className="author-text">
                        <h6 className='card-h6'>Peter Spenser</h6>
                        <p className='card-p-2'>Marketing Director</p>
                    </div>
                </div>
            </div>
          </div>
          <div>
          <div className="card">
                <div className="quote-and-p">
                <FaQuoteLeft className='icon'/>
                <p className='card-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua in voluptate velit esse cillum.</p>
                </div>
                <div className="author">
                    <div className="author-img">
                        <img src={Author1} alt="" className='image-author'/>
                    </div>
                    <div className="author-text">
                        <h6 className='card-h6'>Philip Demarco</h6>
                        <p className='card-p-2'>Copywriter</p>
                    </div>
                </div>
            </div>
          </div>
          <div>
          <div className="card">
                <div className="quote-and-p">
                <FaQuoteLeft className='icon'/>
                <p className='card-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua in voluptate velit esse cillum.</p>
                </div>
                <div className="author">
                    <div className="author-img">
                        <img src={Author2} alt="" className='image-author'/>
                    </div>
                    <div className="author-text">
                        <h6 className='card-h6'>Angelina Johnson</h6>
                        <p className='card-p-2'>Graphic Designer</p>
                    </div>
                </div>
            </div>
          </div>
          <div>
          <div className="card">
                <div className="quote-and-p">
                <FaQuoteLeft className='icon'/>
                <p className='card-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua in voluptate velit esse cillum.</p>
                </div>
                <div className="author">
                    <div className="author-img">
                        <img src={Author3} alt="" className='image-author'/>
                    </div>
                    <div className="author-text">
                        <h6 className='card-h6'>Peter Spenser</h6>
                        <p className='card-p-2'>Marketing Director</p>
                    </div>
                </div>
            </div>
          </div>
        </Slider>
            </div>
        </div>
        



    </div>
  )
}

export default CardCandidate