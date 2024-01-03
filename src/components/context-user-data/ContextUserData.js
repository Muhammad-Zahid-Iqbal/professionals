import React, { createContext, useContext, useState, useEffect } from 'react';
import { authUserData, postRequest } from '../../backendservices/ApiCalls';

const CustomProvider = createContext();

// Context Provider component
export const MyContextProvider = ({ children }) => {
  const [loginUserData, setLoginUserData] = useState();
  const [userprofile, setUserProfile] = useState();
  const [loading,setLoading]=useState(false)
  
  const getUserData = () => {
    authUserData(
      (response) => {
        setLoading(true);
        setLoginUserData(response?.data?.data);
        setUserProfile(response?.data?.data?.profilepictureurl);
        setLoading(false)
        console.log("response?.data?.profilepictureurl",response?.data?.data?.profilepictureurl)
      },
      (error) => {
        console.log(error?.response?.data);
        setLoading(false)
      }
    );
  };

  

  useEffect(() => {
    getUserData();
  }, []);
 
  const refreshUserData = () => {
    getUserData();
  };

  const contextValue = { loginUserData, setLoginUserData, getUserData, loading, refreshUserData, userprofile };

  return <CustomProvider.Provider value={contextValue}>{children}</CustomProvider.Provider>;
};

// Custom hook to use the context
export const useMyContext = () => {
  return useContext(CustomProvider);
};
