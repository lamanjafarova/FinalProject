import React from 'react'
import { Link } from 'react-router-dom'
import NotFoundImg from "../../images/07_mountains.svg"
import "./index.scss"

const NotFoundPage = () => {
  return (
    <div className='not-found-page'>
            <div className="not-found-header">
                <div className="container">
                    <button className='back-to-home'><Link to={"/"}>Home  <i className="fa-solid fa-angles-right"></i></Link></button>
                    <h2 className='not-found-heading-h2'>Error 404</h2>
                    <h1 className='not-found-heading-h1'>Page Not Found</h1>     
                </div>
            </div>
        <div className="not-found-section">
            <div className="container">
                <div className="not-found-body">
                    <div className="context">
                        <h1 className='not-found-h1'>We can’t seem to <br /> find the page you’re <br /> looking for!</h1>
                        <p className='not-found-p'>Looks like the page you are looking for has been moved or does not exist. But there are still couple of things you can do. Click on the site logo to go to the homepage or try searching.</p>
                        <button className='not-found-btn'><Link to={"/"}>Go to HomePage</Link></button>
                    </div>
                <img src={NotFoundImg} alt="" className='not-found-img'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NotFoundPage