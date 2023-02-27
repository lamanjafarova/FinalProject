import React from 'react'
import { Button, message, Modal } from 'antd';
import { useState } from 'react';
import { FaUserTie } from "react-icons/fa"
import "./index.scss";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { registerUser } from '../../../apiColls/user';
import axios from 'axios';

const GetStarted = () => {
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
      // try {
      //   const response = await registerUser(values)
      //   if(response.success){
      //     message.success(response.message)
      //   }
      //   else{
      //     message.error(response.message)
      //   }
      // } catch (error) {
      //   return error
      // }
    const response = await axios.post("http://localhost:8080/users/signup", values)
    localStorage.setItem("token", response.data)
    },
  });
    const [modal2Open, setModal2Open] = useState(false);
  return (
    <div className='get-started-page'>
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
            <h2 className='register-h2'>Register</h2>
            <form onSubmit={formik.handleSubmit}>
       <label htmlFor="firstName">First Name</label>
       <input
         id="firstName"
         name="firstName"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.firstName}
       />
       {formik.touched.firstName && formik.errors.firstName ? (
         <div>{formik.errors.firstName}</div>
       ) : null}
 
       <label htmlFor="password">Password</label>
       <input
         id="password"
         name="password"
         type="password"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.password}
       />
       {formik.touched.password && formik.errors.password ? (
         <div>{formik.errors.password}</div>
       ) : null}
 
       <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.email}
       />
       {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.email}</div>
       ) : null}
 
       <button type="submit">Submit</button>
     </form>
        </div>
      </Modal>
            </div>
        </div>


    </div>
  )
}

export default GetStarted