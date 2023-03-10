import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import GetStarted from '../../components/get-started'
import Post1 from "../../images/post1.jpg";
import Post2 from "../../images/post2.jpg";
import Post3 from "../../images/post3.jpg";
import Post5 from "../../images/post5.jpg";
import Post6 from "../../images/post6.jpg";
import Post7 from "../../images/post7.jpg";
import PostLink from "../../images/post-link.png";
import { RiMessage2Fill } from "react-icons/ri"
import "./index.scss"

const NewsPage = () => {
  return (
    <div className='news-page'>
      <div className="news-header">
        <div className="container">
        <button className='back-to-home'><Link to={"/"}>Home  <i className="fa-solid fa-angles-right"></i></Link></button>
        <h2 className='news-heading-h2'>News</h2>
        <h1 className='news-heading-h1'>Read our blog</h1>
        </div>
      </div>
      <h1 className='article-h1'>All Articles</h1>
      <div className="all-articles">
      <div className='blog-news-section'>
        <div className="container">
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
        </div>
    </div>
    <div className="container">
    <div className="blog-cards">
      <div className="card-blog-detail">
      <div className="post-business-heading">
                        <h5 className='post-h5-2'><NavLink to={"/"}>MARKETING</NavLink></h5>
                    </div>
                    <div className="business-post-img">
                        <h5 className='h5-post-2'><NavLink to={"/news-page"}>YouTube Video Post Format</NavLink></h5>
                        <p className='post-p-2'>Ut enim ad minim aliquip veniam, quis aliquip nostrud aliquip exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <img src={Post3} alt="" className='post-img-2'/>
                        <div className="post-text-2">
                                <h6 className='post-h6-2'>11 FEBRUARY 2023</h6>
                                <div className="icon-and-span-2">
                                <span className='post-span-2'><NavLink to={"/news-page"}>0</NavLink></span>
                                <RiMessage2Fill className='post-icon-2'/>
                                </div>
                            </div>
                    </div>
      </div>
      <div className="card-blog-detail">
          <div className="text-blog-news-h1">
              <p className='blog-news-p'>
              Ut enim ad minim <br /> veniam, quis <br /> nostrud <br /> exercitation <br /> ullamco laboris <br /> nisi ut aliquip ex <br /> ea commodo <br /> consequat velit <br /> esse cillum <br /> dolore.
              </p>
              <h6 className='card-news-h6'>Angelina Johnson</h6>
              <p className='card-news-p-2'>Graphic Designer</p>
          </div>
      </div>
      <div className="card-blog-detail">
      <div className="post-business-heading">
                        <h5 className='post-h5-2'><NavLink to={"/"}>CREATIVE</NavLink></h5>
                    </div>
                    <div className="business-post-img">
                        <h5 className='h5-post-2'><NavLink to={"/news-page"}>SoundCloud Audio Post Format</NavLink></h5>
                        <p className='post-p-2'>Ut enim ad minim aliquip veniam, quis aliquip nostrud aliquip exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <img src={Post3} alt="" className='post-img-2'/>
                        <div className="post-text-2">
                                <h6 className='post-h6-2'>11 FEBRUARY 2023</h6>
                                <div className="icon-and-span-2">
                                <span className='post-span-2'><NavLink to={"/news-page"}>238</NavLink></span>
                                <RiMessage2Fill className='post-icon-2'/>
                                </div>
              </div>
          </div>
      </div>
    </div>
  <div className="startup-business">
  <div className="business-card">
       <img src={PostLink} alt="" className='post-link-img'/>
       <p className='post-link-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
       <h6 className='post-link-h6'>crumina.net</h6>
         </div>
         <div className="startup-card">
                    <div className="post-heading">
                        <h5 className='post-h5'><NavLink to={"/"}>PHOTOGRAPHY, ART</NavLink></h5>
                    </div>
                    <div className="img-text-post">
                        <div className="p-and-h5">
                        <h5 className='h5-post'><NavLink to={"/news-page"}>Photo Gallery Post Format</NavLink></h5>
                            <p className='post-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor.</p>
                        </div>
                            <img src={Post5} alt="" className='post-img'/>
                            <div className="post-text">
                                <h6 className='post-h6'>11 FEBRUARY 2023</h6>
                               <div className="icon-and-span">
                               <span className='post-span'><NavLink to={"/news-page"}>6</NavLink></span>
                                <RiMessage2Fill className='post-icon'/>
                        </div>
                    </div>
                </div>
        </div>
  </div>
    <div className="blog-cards">
      <div className="card-blog-detail">
      <div className="post-business-heading">
                        <h5 className='post-h5-2'><NavLink to={"/"}>STARTUP</NavLink></h5>
                    </div>
                    <div className="business-post-img">
                        <h5 className='h5-post-2'><NavLink to={"/news-page"}>Simple Post with Featured  Image</NavLink></h5>
                        <p className='post-p-2'>Ut enim ad minim aliquip veniam, quis aliquip nostrud aliquip exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <img src={Post6} alt="" className='post-img-2'/>
                        <div className="post-text-2">
                                <h6 className='post-h6-2'>11 FEBRUARY 2023</h6>
                                <div className="icon-and-span-2">
                                <span className='post-span-2'><NavLink to={"/news-page"}>46</NavLink></span>
                                <RiMessage2Fill className='post-icon-2'/>
                                </div>
                            </div>
                    </div>
      </div>
      <div className="card-blog-detail">
      <div className="post-business-heading">
                        <h5 className='post-h5-2'><NavLink to={"/"}>CREATIVE</NavLink></h5>
                    </div>
                    <div className="business-post-img">
                        <h5 className='h5-post-2'><NavLink to={"/news-page"}>Standard Video Post Format</NavLink></h5>
                        <p className='post-p-2'>Ut enim ad minim aliquip veniam, quis aliquip nostrud aliquip exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <img src={Post7} alt="" className='post-img-2'/>
                    <div className="post-text-2">
                        <h6 className='post-h6-2'>11 FEBRUARY 2023</h6>
                        <div className="icon-and-span-2">
                        <span className='post-span-2'><NavLink to={"/news-page"}>2</NavLink></span>
                        <RiMessage2Fill className='post-icon-2'/>
                    </div>
              </div>
          </div>
      </div>
      <div className="card-blog-detail-text">
      <div className="post-business-heading">
                        <h5 className='post-h5-2'><NavLink to={"/"}>CREATIVE</NavLink></h5>
                    </div>
                    <div className="business-post-img">
                        <h5 className='h5-post-2'><NavLink to={"/news-page"}>Standard Video Post Format</NavLink></h5>
                        <p className='post-p-2'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <p className='post-p-bottom'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
    </div>
      </div>
       <div className="get-started">
        <GetStarted />
       </div>

    </div>
  )
}

export default NewsPage