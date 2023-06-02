import React from 'react'
import './App.css'
import Visualizer from './components/Visualizer'
import Compare from './components/Compare'
import {BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
         <Route path='/' exact element={<Visualizer/>} />
         <Route path='/compare' element={<Compare/>} />
      </Routes>
    </Router>

  )
}

export default App
