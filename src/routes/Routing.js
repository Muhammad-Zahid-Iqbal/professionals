import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Testing from '../Testing'
import Findclass from '../pages/find-class/Findclass'
import Login from '../pages/login-page/Login'
import Signup from '../pages/signup-page/Signup'
import Counselling from '../pages/Counselling-London/Counselling'
import Div from '../shared/Div'
import Dashboard from '../pages/dashboard/Dashboard'
import UserDetail from '../pages/Counselling-London/UserDetail'
import CopyLink from '../pages/dashboard/CopyLink'
import UserReview from '../pages/Counselling-London/UserReview'
import FindCounselling from '../pages/find-class/FindCounselling'
import Usertable from '../pages/User-Table/Usertable'

const Routing = () => {
  return (
    <Div>
      <Routes>
        <Route path="/testing" element={<Testing />} />
        <Route path="/" element={<Findclass />} />
         <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/Tutors-Assessors" element={<Counselling />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user-detail/:id" element={<UserDetail />} />
        <Route path="/copy-link/:id" element={<CopyLink />} />
        <Route path="/user-review/:id" element={<UserReview />} />
        <Route path="/user-table" element={<Usertable />} />
        {/* <Route path="/Tutor.Assessors" element={<FindCounselling />} /> */}
      </Routes>
    </Div>
  )
}

export default Routing
