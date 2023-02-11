import React from 'react'
import AppPuzzler from '../../components/app'
import CardCandidate from '../../components/card-candidate'
import GetStarted from '../../components/get-started'

const HowItWorks = () => {
  return (
    <div className='how-it-works'>
     <div className="puzzler-app">
     <AppPuzzler />
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