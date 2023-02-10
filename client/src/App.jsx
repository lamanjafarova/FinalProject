import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './assets/layouts/header'
import Candidates from './assets/pages/candidates'
import Employers from './assets/pages/employers'
import HomePage from './assets/pages/home'
import HowItWorks from './assets/pages/how-it-works'
import NewsPage from './assets/pages/news-page'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/how-it-works' element={<HowItWorks />} />
        <Route path='/employers' element={<Employers />} />
        <Route path='/candidates' element={<Candidates />} />
        <Route path='/news-page' element={<NewsPage />} />
      </Routes>
    </div>
  )
}

export default App