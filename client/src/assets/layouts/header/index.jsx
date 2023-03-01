import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../images/01_logo_white.svg";
import { Menu, Dropdown, Button, Modal } from "antd";
import { RxHamburgerMenu } from "react-icons/rx";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import "./index.scss";
import { useSelector } from "react-redux";
import LogIn from "../../components/log-in";
const Header = () => {
  const user = useSelector((state) => state.users)

  const formik = useFormik({
    initialValues: {
      firstName: '',
      password: '',
      email: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      password: Yup.string()
        .min(3, 'Must be 3 characters or more')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: async (values) => {
    const response = await axios.post("http://localhost:8080/users/signup", values)
    localStorage.setItem("token", response.data)
    setModal2Open(false)
    },
  });
  
  const [modal2Open, setModal2Open] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [open, setOpen] = useState(false)

  const handletoggle = () => {
    setToggle(!toggle);
  };
  return (
    <div id="header">
      <div className="main-header">
        <div className="container">
          <div className="header-in-container">
            <div className="logo">
              <img src={Logo} alt="" className="logo-img" />
            </div>

            <nav>
              <ul className="list">
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  {user.user == null ? "":  user.user.email }
                </li>
                <li>
                  <NavLink to={"/how-it-works"}>How it works</NavLink>
                </li>
                <li>
                  <NavLink to={"/employers"}>Job List</NavLink>
                </li>
                <li>
                  <NavLink to={"/candidates"}>
                    <Dropdown
                      overlay={
                        <Menu>
                          <Menu.Item key="0">Candidate Lists</Menu.Item>
                          <Menu.Item key="1">
                            <Link to={"/submit-resume"}>Submit Resume</Link>
                          </Menu.Item>
                        </Menu>
                      }
                      trigger={["hover"]}
                    >
                      <a
                        className="ant-dropdown-link"
                        onClick={(e) => e.preventDefault()}
                      >
                        Candidates
                      </a>
                    </Dropdown>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/news-page"}>News</NavLink>
                </li>
              </ul>
              <RxHamburgerMenu
                className="burger"
                onClick={() => handletoggle()}
              />
              {toggle ? null : (
                <ul className="mobile">
                  <li>
                    <NavLink to={"/"}>HOME</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/how-it-works"}>How it works</NavLink>
                  </li>
                </ul>
              )}
            </nav>
            <div className="sign-log-in-btn">
            <Button className='sign-up' onClick={() => setModal2Open(true)}> Sign Up</Button>
            <Modal
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <div className="register">
          <h2 className='register-h2'>Sign Up</h2>
          <form onSubmit={formik.handleSubmit}>
          <div className="first-name">
          <label htmlFor="firstName" className='first'>First Name *</label>
        <input
         id="firstName"
         name="firstName"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.firstName}
         className='input'
       />
          </div>
       {formik.touched.firstName && formik.errors.firstName ? (
         <div>{formik.errors.firstName}</div>
       ) : null}
 

      <div className="last-name">
       <label htmlFor="email" className='last'>Email Address *</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.email}
         className='input'
       />
       </div>
       {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.email}</div>
       ) : null}
      <div className="password">
      <label htmlFor="password" className='pswrd'>Password *</label>
       <input
         id="password"
         name="password"
         type="password"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.password}
         className='input'
       />
      </div>
       {formik.touched.password && formik.errors.password ? (
         <div>{formik.errors.password}</div>
       ) : null}
       <div className="btn-group">
       <button type="submit" className='create-btn'>Create an Account</button>
       </div>
     </form>
        </div>
      </Modal>
      <Button className="log-in" onClick={() => setOpen(!open)}>Log In</Button>
            </div>
            <div className="select-language">
              <select name="Ua" id="" className="lng-slct">
                <option className="option" value="Ua">
                  Ua
                </option>
                <option className="option" value="Fr">
                  Fr
                </option>
                <option className="option" value="En">
                  En
                </option>
                <option className="option" value="De">
                  De
                </option>
                <option className="option" value="It">
                  It
                </option>
              </select>
            </div>
          </div>
        </div>
        {
          open &&   <div className="log_in">
              <LogIn />
          </div>
        }
        
      </div>
    </div>
  );
};

export default Header;
