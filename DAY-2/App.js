import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Login from './login'
import './App.css'
import RegistrationForm from './register'

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/register" element={<RegistrationForm/>}/>
      </Routes>
    </>
  )
}
export default App