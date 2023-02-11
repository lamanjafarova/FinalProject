import React from 'react'
import { Button, Modal } from 'antd';
import { useState } from 'react';
import { FaUserTie } from "react-icons/fa"
import "./index.scss";

const GetStarted = () => {
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
        // title="Register"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <div className="register">
            <h2 className='register-h2'>Register</h2>
            <div className="first-name">
            <label htmlFor="firstName">First Name *</label>
            <input type="text" />
            </div>
           <div className="last-name">
           <label htmlFor="lastName">Last Name *</label>
            <input type="text" />
           </div>
           <div className="password">
           <label htmlFor="password">Password *</label>
            <input type="text" />
           </div>
           <div className="btn-group">
                <button>Create an Account</button>
                <button>Log In</button>
           </div>
        </div>
      </Modal>
            </div>
        </div>


    </div>
  )
}

export default GetStarted