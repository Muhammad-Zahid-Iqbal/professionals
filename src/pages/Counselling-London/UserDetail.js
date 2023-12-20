import React from 'react'
import { useParams, useLocation  } from 'react-router-dom';

const UserDetail = ({ loading}) => {
    const location = useLocation();
    const therapists = location.state?.therapists || [];
    const { id } = useParams();
    console.log("paramsID", id);
  
    // Find the user with the specified id
    const user = therapists && therapists.find(user => user.id === parseInt(id, 10));
console.log("user", user);
console.log("therapists", therapists);
  
    if (!user && loading) {
      // If user is not found, you can handle it accordingly (e.g., show an error message)
      return <div>User not found</div>;
    }
  return (
    <>
     <h1>UserDetail</h1>
      <p>ID: {user?.id}</p>
      <p>Name: {user?.firstname}</p>
    </>
  )
}

export default UserDetail