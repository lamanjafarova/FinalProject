import React from 'react'
import Iphone from "../../images/iphone.png"
import "./index.scss"

const AppPuzzler = () => {
  return (
    <div className='app'>
        <div className="container">
            <div className="app-text-img">
                <div className="app-text">
                    <h1 className='app-h1'>Get Puzzler App for <br /> your mobile</h1>
                    <h4 className='app-h4'>Download free Puzzler application now!</h4>
                    <div className="store-google-app">
                        <div className="app-store">
                            <i className="fa-brands fa-apple"></i>
                            <h6 className='app-h6'>APPLE <br /> STORE</h6>
                        </div>
                    <div className="google-play">
                        <i className="fa-brands fa-google-play"></i>
                        <h6 className='app-h6'>GOOGLE <br /> PLAY</h6>
                    </div>
                </div>
            </div>
            <div className="app-img">
                <img src={Iphone} alt="" className='image'/>
            </div>
        </div>
    </div>


</div>
  )
}

export default AppPuzzler