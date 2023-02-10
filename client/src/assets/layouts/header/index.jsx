import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from "../../images/01_logo_white.svg"
import { Menu, Dropdown } from 'antd';
import { VscChevronDown } from "react-icons/vsc";
import "./index.scss"
const Header = () => {
  return (
    <div id='header'>
      <div className="main-header">
        <div className="container">
          <div className="header-in-container">
          <div className="logo">
              <img src={Logo} alt="" className='logo-img'/>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/how-it-works"}>How it works</NavLink>
              </li>
              <li>
                <NavLink to={"/employers"}>
                <Dropdown
          overlay={(
            <Menu>
              <Menu.Item key="0">
                Job Lists
              </Menu.Item>
              <Menu.Item key="1">
              Job details
              </Menu.Item>
              <Menu.Item key="1">
              Company Lists
              </Menu.Item>
            </Menu>
          )}
          trigger={['hover']}>
          <a className="ant-dropdown-link" 
             onClick={e => e.preventDefault()}>
            Employers <VscChevronDown />
          </a>
        </Dropdown>
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
              Candidate details
              </Menu.Item>
              <Menu.Item key="1">
              Submit Resume
              </Menu.Item>
            </Menu>
          )}
          trigger={['hover']}>
          <a className="ant-dropdown-link" 
             onClick={e => e.preventDefault()}>
            Candidates <VscChevronDown />
          </a>
        </Dropdown>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/news-page"}>News Page</NavLink>
              </li>
            </ul>
          </nav>
          <div className="sign-log-in-btn">
            <button className='sign-up'>Sign Up</button>
            <button className='log-in'>Login</button>
          </div>
          <div className="select-language">
            <select name="Ua" id="">
              <option value="Ua">Ua</option>
              <option value="Fr">Fr</option>
              <option value="En">En</option>
              <option value="De">De</option>
              <option value="It">It</option>
            </select>
          </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Header