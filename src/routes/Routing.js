import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Testing from '../Testing'
import Findclass from '../pages/find-class/Findclass'
import Login from '../pages/login-page/Login'
import Signup from '../pages/signup-page/Signup'
import Counselling from '../pages/Counselling-London/Counselling'
import Div from '../shared/Div'
import Dashboard from '../pages/dashboard/Dashboard'
import Logout from '../pages/logout-page/Logout'

const Routing = () => {
  return (
    <Div>
      <Routes>
        <Route path="/testing" element={<Testing />} />
        <Route path="/" element={<Findclass />} />
         <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/counselling" element={<Counselling />} />
        <Route path="/dash-board" element={<Dashboard />} />
        <Route path="/logout" element={<Logout />} />
        {/* <Route path="/landing-page" element={<Findclass />} /> */}
      </Routes>
    </Div>
  )
}

export default Routing
