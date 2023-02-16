import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from "../../images/01_logo_white.svg"
import { Menu, Dropdown } from 'antd';
import {RxHamburgerMenu} from 'react-icons/rx';
// import ScrollToTop from "react-scroll-to-top";
import "./index.scss"
const Header = () => {
  const [toggle, setToggle] = useState(true)

  const handletoggle=()=>{
    setToggle(!toggle)
  }
  return (
    <div id='header'>
      <div className="main-header">
        <div className="container">
          <div className="header-in-container">
          <div className="logo">
              <img src={Logo} alt="" className='logo-img'/>
          </div>
        
          <nav>
            <ul className='list'>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/how-it-works"}>How it works</NavLink>
              </li>
              <li>
                <NavLink to={"/employers"}>
                  Job List
                </NavLink>
              </li>
              <li>
                <NavLink to={"/candidates"}>
                <Dropdown
          overlay={(
            <Menu>
              <Menu.Item key="0">
              Candidate Lists
              </Menu.Item>
              <Menu.Item key="1">
              Submit Resume
              </Menu.Item>
            </Menu>
          )}
          trigger={['hover']}>
          <a className="ant-dropdown-link" 
             onClick={e => e.preventDefault()}>
            Candidates
          </a>
        </Dropdown>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/news-page"}>News</NavLink>
              </li>
            </ul>
            <RxHamburgerMenu className='burger' onClick={()=>handletoggle()}/>
          {
              (toggle)
              ?
              null
              :
              <ul className='mobile'>
                <li><NavLink to={'/'}>HOME</NavLink></li>
              <li>
                <NavLink to={"/how-it-works"}>How it works</NavLink>
              </li>
            </ul>
          }
          </nav>
          <div className="sign-log-in-btn">
            <button className='sign-up'>Sign Up</button>
            <button className='log-in'>Login</button>
          </div>
          <div className="select-language">
            <select name="Ua" id="" className="lng-slct">
              <option className='option' value="Ua">Ua</option>
              <option className='option' value="Fr">Fr</option>
              <option className='option' value="En">En</option>
              <option className='option' value="De">De</option>
              <option className='option' value="It">It</option>
            </select>
          </div>
          </div>
        </div>
      </div>
      {/* <ScrollToTop smooth /> */}



    </div>
  )
}

export default Header