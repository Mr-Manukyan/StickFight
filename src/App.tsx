import { useLocation, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import './App.css'
import { StartPage } from './Components/Pages/StartPage/StartPage'
import GamePage from './Components/Pages/GamePage/GamePage'

const App = () => {
  const location = useLocation()

  return (
    <div className='App'>
      <AnimatePresence mode='wait'>
        <Routes key={location.pathname} location={location}>
          <Route path={'/'} element={<StartPage />} />
          <Route path={'/game'} element={<GamePage />} />
          <Route path='*' element={<h2>Not Found 404</h2>} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
