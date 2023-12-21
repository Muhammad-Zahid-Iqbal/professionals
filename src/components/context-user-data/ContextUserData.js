import React, { createContext, useContext, useState, useEffect } from 'react';
import { authUserData, postRequest } from '../../backendservices/ApiCalls';

const CustomProvider = createContext();

// Context Provider component
export const MyContextProvider = ({ children }) => {
  const [loginUserData, setLoginUserData] = useState();
  const [usersProfileData, setUsersProfileData] = useState([]);
  const [pictureLink, setPictureLink] = useState();
  const [loading,setLoading]=useState(true)
  
  const getUserData = () => {
    authUserData(
      (response) => {
        setLoginUserData(response?.data?.data);
        setLoading(false)
      },
      (error) => {
        console.log(error?.response?.data);
        setLoading(false)
      }
    );
  };

  const GetallUsers = () => {
    postRequest(
      '/getallusers',
      "",
      (response) => {
        setLoading(true);
        console.log("getallusersResponse", response)
        if (response?.data?.status === 'success') {
          setUsersProfileData(response?.data?.data);
          setPictureLink(response?.data?.profilePicLink);
        }
        setLoading(false);
      },
      (error) => {
        console.log(error?.response?.data);
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    getUserData();
    GetallUsers();
  }, []);
 
  const refreshUserData = () => {
    getUserData();
  };

  const contextValue = { loginUserData, setLoginUserData, getUserData, loading, refreshUserData, pictureLink, usersProfileData };

  return <CustomProvider.Provider value={contextValue}>{children}</CustomProvider.Provider>;
};

// Custom hook to use the context
export const useMyContext = () => {
  return useContext(CustomProvider);
};
