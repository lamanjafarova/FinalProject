import React from 'react'
import { Button, Modal } from 'antd';
import { useState } from 'react';
import { FaUserTie } from "react-icons/fa"
import "./index.scss";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../../redux/userSlice/userSlice';

const GetStarted = () => {
  const user = useSelector((state) => state.users)
 const dispatch = useDispatch()
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
    // console.log(response.data)
    // localStorage.setItem("token", JSON.stringify(response.data))
    dispatch(setUser(response.data.result))
    },
  });
    const [modal2Open, setModal2Open] = useState(false);
  return (
    <div className='get-started-page'>
      {
        console.log(user)
      }
        <div className="container">
            <div className="get-started-text">
                <h1 className='started-h1'>Get to start the <br /> Puzzler right <br /> now!</h1>
                <p className='started-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Button className='btn-sign-up' onClick={() => setModal2Open(true)}>
                   <FaUserTie /> Sign Up
                </Button>
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
            </div>
        </div>


    </div>
  )
}

export default GetStarted