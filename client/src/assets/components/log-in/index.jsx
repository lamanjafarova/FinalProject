import React from 'react'
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { logInUser } from '../../../apiColls/user';
import "./index.scss"

const LogIn = () => {
  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(3, 'Must be 3 characters or more')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: async (values) => {
      const response = await axios.post("http://localhost:8080/users/signin", values)
      if(response.success){
        localStorage.setItem("token", response.data)
        message.success(response.message)
      }
      else{
        message.error(response.message)
      }
    // const response = await logInUser(values)
    console.log(response.data);
    },
  });
    const [modal2Open, setModal2Open] = useState(false);
  return (
    <div className='log-in-page'>
        <div className="container">
            <div className="log-in-text">
                <div className="register">
            <h2 className='register-h2'>Log In</h2>
            <form onSubmit={formik.handleSubmit}>
     <div className="email-div">
     <label htmlFor="email" className='e-mail'>Email Address *</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.email}
         className='input-email'
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
       <button type="submit" className='submit-btn'>Submit</button>
     </form>
        </div>
            </div>
        </div>


    </div>
  )
}

export default LogIn