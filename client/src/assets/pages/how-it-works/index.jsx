import React from 'react'
import { Link } from 'react-router-dom'
import AppPuzzler from '../../components/app'
import CardCandidate from '../../components/card-candidate'
import GetStarted from '../../components/get-started'
import Icon2 from "../../images/02_how_it_works.svg"
import { Button, Modal } from 'antd';
import { useState } from 'react';
import { RiArrowDropRightLine } from "react-icons/ri";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'
import "./index.scss"

const HowItWorks = () => {
  const [modal2Open, setModal2Open] = useState(false);
  return (
    <div className='how-it-works'>
      <div className="how-it-works-heading">
        <div className="container">
          <button className='back-to-home'><Link to={"/"}>Home  <i className="fa-solid fa-angles-right"></i></Link></button>
          <h4 className='page-2-h4'>How it works</h4>
          <h1 className='page-2-h1'>How Puzzler works for you</h1>
          <div className="text-how-it-works">
          <div className="h1-div">
          <h1 className='text-h1-how-it-works'>We connect <br /> employers with <br /> professionals</h1>
          </div>
          <div className="p-div">
          <p className='p-text-how-it-works'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <img src={Icon2} alt="" className='icon-2' />
        </div>
      </div>
      <div className="find-job">
      <div className="container">
        <div className="section-1">
          <div className="text-find-job">
          <div className="h1-div">
          <h1 className='text-h1-find-job'>Find your dream job <br /> in a few clicks</h1>
          </div>
          <div className="p-div">
          <p className='p-text-find-job'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        <div className="find-job-cards">
          <div className="card-one">
            <h3 className='h3-find-job'>Create an account</h3>
            <i className="fa-solid fa-user-plus"></i>
            <p className='find-p'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur.</p>
            <div className="read-more">
              <button className='read-btn'>Read more</button>
              <RiArrowDropRightLine />
            </div>
          </div>
          <div className="card-one">
            <h3 className='h3-find-job'>Add your resume</h3>
            <i className="fa-solid fa-file-circle-check"></i>
            <p className='find-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt consequat excepteur.</p>
            <div className="read-more">
              <button className='read-btn'>Read more</button>
              <RiArrowDropRightLine />
            </div>
          </div>
          <div className="card-one">
            <h3 className='h3-find-job'>Get a job</h3>
            <i className="fa-regular fa-solid fa-handshake"></i>
            <p className='find-p'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="read-more">
              <button className='read-btn'>Read more</button>
              <RiArrowDropRightLine />
            </div>
          </div>
        </div>
      </div>
      </div>
     </div>
     <div className="find-professionals">
      <div className="container">
          <div className="section-2">
            <div className="text-section-2">
              <div className="h1-div">
                <h1 className='text-h1-section-2'>Find your dream job <br /> in a few clicks</h1>
            </div>
              <div className="p-div">
                <p className='p-text-section-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            <div className="section-2-cards">
              <div className="card-body">
                  <h3 className='h3-card'>Create an account</h3>
                  <p className='card-p'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
                  <i className="fa-solid fa-user-plus"></i>
              </div>
              <div className="card-body">
                  <h3 className='h3-card'>Add your vacancy</h3>
                  <p className='card-p'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
                  <i className="fa-solid fa-file-circle-check"></i>
              </div>
              <div className="card-body">
                  <h3 className='h3-card'>Hire an employee</h3>
                  <p className='card-p'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
                  <i className="fa-regular fa-solid fa-handshake"></i>
              </div>
            </div>
          </div>
      </div>
     </div>
     <div className="puzzler-app">
     <AppPuzzler />
     </div>
     <div className="accordion">
          <div className="container">
           <div className="h1-div">
           <h1 className='accardion-h1'>
            Frequently asked <br /> questions
            </h1>
           </div>
  <Accordion>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' fontSize='30px' fontFamily='IBM Plex Sans, sans-serif' className='accardion-h2'>
        Lorem ipsum dolor sit amet, consectetur adipiscing?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} fontSize='16px' fontFamily='IBM Plex Sans, sans-serif'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' fontSize='30px' fontFamily='IBM Plex Sans, sans-serif' className='accardion-h2'>
        Ut enim ad minim veniam?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} fontSize='16px' fontFamily='IBM Plex Sans, sans-serif'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' fontSize='30px' fontFamily='IBM Plex Sans, sans-serif' className='accardion-h2'>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} fontSize='16px' fontFamily='IBM Plex Sans, sans-serif'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' fontSize='30px' fontFamily='IBM Plex Sans, sans-serif' className='accardion-h2'>
        Excepteur sint occaecat cupidatat non proident?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} fontSize='16px' fontFamily='IBM Plex Sans, sans-serif'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
          </div>
     </div>
     <div className="candidate-card">
      <CardCandidate />
     </div>
     <div className="get-started">
      <GetStarted />
     </div>
    </div>
  )
}

export default HowItWorks