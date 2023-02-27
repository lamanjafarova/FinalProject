import React from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"

const SubmitResume = () => {
  return (
    <div className='submit-resume'>
           <div className="submit-header">
                <div className="container">
                    <button className='back-to-home'><Link to={"/"}>Home<i className="fa-solid fa-angles-right"></i></Link></button>
                    <button className='back-to-candidate'><Link to={"/candidates"}>Candidate<i className="fa-solid fa-angles-right"></i></Link></button>
                    <h2 className='submit-heading-h2'>Account</h2>
                    <h1 className='submit-heading-h1'>Submit Your Resume</h1>
                </div>
            </div>
            <div className="create-account">
              <div className="container">
                
              </div>
            </div>
    </div>
  )
}

export default SubmitResume