import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './assets/layouts/footer'
import Header from './assets/layouts/header'
import Candidates from './assets/pages/candidates'
import Employers from './assets/pages/employers'
import HomePage from './assets/pages/home'
import HowItWorks from './assets/pages/how-it-works'
import NewsPage from './assets/pages/news-page'
import NotFoundPage from './assets/pages/not-found'
import SubmitResume from './assets/pages/sign-up-page'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/how-it-works' element={<HowItWorks />} />
        <Route path='/employers' element={<Employers />} />
        <Route path='/candidates' element={<Candidates />} />
        <Route path='/submit-resume' element={<SubmitResume />} />
        <Route path='/news-page' element={<NewsPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
