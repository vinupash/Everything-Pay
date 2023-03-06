import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './screens/AppScreen/Home'
import ForgotPassword from './screens/AuthScreen/ForgotPassword'
import Login from './screens/AuthScreen/Login'
import Registration from './screens/AuthScreen/Registration'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </>
  )
}

export default App