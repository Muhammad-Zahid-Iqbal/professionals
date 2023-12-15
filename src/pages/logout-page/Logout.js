import React, { useEffect } from 'react'

const Logout = () => {
    useEffect(() => {
        localStorage.setItem('token', null)
    },[]);

  return (
    <></>
  )
}

export default Logout