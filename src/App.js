import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './screens/AppScreen/Home'
import CreateNewPassword from './screens/AuthScreen/CreateNewPassword';
import ForgotPassword from './screens/AuthScreen/ForgotPassword'
import Login from './screens/AuthScreen/Login'
import Registration from './screens/AuthScreen/Registration'
import VerifyCode from './screens/AuthScreen/VerifyCode';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verifycode" element={<VerifyCode />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/createnewpassword" element={<CreateNewPassword />} />
      </Routes>
    </>
  )
}

export default App