import React from 'react'
import {  Link, NavLink } from 'react-router-dom';
import Post1 from "../../images/post1.jpg";
import Post2 from "../../images/post2.jpg";
import { RiMessage2Fill } from "react-icons/ri"
import "./index.scss";

const BlogNews = () => {
  return (
    <div className='blog-news-section'>
        <div className="container">
        <div className="blog-text">
                <div className="h1-card-blog">
                <h1 className='blog-h1'>Most Recent From <br /> The Blog</h1>
                </div>
                <div className="p-card-blog">
                <p className='p-blog'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            <div className="startup-business">
                <div className="startup-card">
                    <div className="post-heading">
                        <h5 className='post-h5'><NavLink to={"/"}>Startup, Business</NavLink></h5>
                    </div>
                    <div className="img-text-post">
                        <div className="p-and-h5">
                        <h5 className='h5-post'><NavLink to={"/news-page"}>Attached: The Important & <br /> Standard Post Format</NavLink></h5>
                            <p className='post-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor.</p>
                        </div>
                            <img src={Post1} alt="" className='post-img'/>
                            <div className="post-text">
                                <h6 className='post-h6'>11 FEBRUARY 2023</h6>
                               <div className="icon-and-span">
                               <span className='post-span'><NavLink to={"/news-page"}>6</NavLink></span>
                                <RiMessage2Fill className='post-icon'/>
                               </div>
                            </div>
                    </div>
                </div>
                <div className="business-card">
                    <div className="post-business-heading">
                        <h5 className='post-h5-2'><NavLink to={"/"}>Business</NavLink></h5>
                    </div>
                    <div className="business-post-img">
                        <h5 className='h5-post-2'><NavLink to={"/news-page"}>Simple Post with Featured <br /> Image</NavLink></h5>
                        <p className='post-p-2'>Ut enim ad minim aliquip veniam, quis aliquip nostrud aliquip exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <img src={Post2} alt="" className='post-img-2'/>
                        <div className="post-text-2">
                                <h6 className='post-h6-2'>11 FEBRUARY 2023</h6>
                                <div className="icon-and-span-2">
                                <span className='post-span-2'><NavLink to={"/news-page"}>0</NavLink></span>
                                <RiMessage2Fill className='post-icon-2'/>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <div className="news-btn">
                <button className='btn-news'><Link to={"/news-page"}>All News</Link></button>
            </div>
        </div>
    </div>
  )
}

export default BlogNews