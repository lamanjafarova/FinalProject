import React from 'react'
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { logInUser } from '../../../apiColls/user';

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
        window.location.href = "/news-page"
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
    <div className='get-started-page'>
        <div className="container">
            <div className="get-started-text">
                <div className="register">
            <h2 className='register-h2'>Register</h2>
            <form onSubmit={formik.handleSubmit}>
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
            </div>
        </div>


    </div>
  )
}

export default LogIn