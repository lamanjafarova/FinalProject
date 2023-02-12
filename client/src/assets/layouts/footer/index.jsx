import React from 'react'
import Logo from "../../images/01_logo_white.svg"
import { MdDialpad, MdAlternateEmail, MdArrowRight } from "react-icons/md" 
import { TfiEmail } from "react-icons/tfi";
import { AiFillFacebook, AiOutlineTwitter } from "react-icons/ai" 
import { ImLinkedin2 } from "react-icons/im";
import { FaRss } from "react-icons/fa"
import { NavLink } from 'react-router-dom';
import "./index.scss";

const Footer = () => {
  return (
    <div className='footer-section'>
      <div className="container">
        <div className="top-footer">
            <div className="side-one">
              <img src={Logo} alt="" className='footer-logo'/>
              <p className='footer-p'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.</p>
              <div className="pad">
                <MdDialpad className='pad-icon'/>
                <span className='pad-main-span'><span className='pad-span'>8 800 567.890.00</span> Mon-Fri 9am-6pm</span>
              </div>
              <MdAlternateEmail className='email-icon'/>
              <span className='email-span'>support@jobook.com</span>
            </div>
            <ul className='candidates-ul'>Candidates
              <li> <MdArrowRight /> Browse Jobs</li>
              <li><MdArrowRight /> Browse Companies</li>
              <li><MdArrowRight /> Categories</li>
              <li><MdArrowRight /> Submit Resume</li>
              <li><MdArrowRight /> Dashboard</li>
            </ul>
            <ul className='employers-ul'>Employers
              <li><MdArrowRight /> Browse Candidates</li>
              <li><MdArrowRight /> Post a Job</li>
              <li><MdArrowRight /> Dashboard</li>
            </ul>
            <div className="right-side">
              <h3 className='right-h3'>Sign Up for Weekly Newsletter</h3>
              <p className='right-p'>Subscribe to our newsletter and always be aware <br /> of all the latest updates.</p>
             <div className="input">
             <input type="text" placeholder='Email Address' className='right-input' />
              <TfiEmail className='icon-email'/>
             </div>
              <div className="social-icons">
                <AiFillFacebook />
                <AiOutlineTwitter />
                <ImLinkedin2 />
                <FaRss />
              </div>
            </div>
        </div>
        <div className="bottom-footer">
          <ul className='bottom-ul'>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/how-it-works"}>How it works</NavLink>
            </li>
            <li>
              <NavLink to={"/employers"}>Employers</NavLink>
            </li>
            <li>
              <NavLink to={"/candidates"}>Candidates</NavLink>
            </li>
            <li>
              <NavLink to={"/news-page"}>News Page</NavLink>
            </li>
          </ul>
          <p className='bottom-p'>© 2019 Puzzler. designed by themefire. Developed by Crumina</p>
        </div>
      </div>



    </div>
  )
}

export default Footer