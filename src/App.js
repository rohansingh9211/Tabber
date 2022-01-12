import React from 'react'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Message from './pages/Message'
import Member from './pages/Member'

const App = () => {
  return (
   <>
   <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/message" element={<Message/>}/>
        <Route path="/member" element={<Member/>}></Route>
      </Routes>
   </Router>
   </>
  )
}

export default App
