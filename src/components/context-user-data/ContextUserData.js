import React, { createContext, useContext, useState, useEffect } from 'react';
import { authUserData } from '../../backendservices/ApiCalls';

const CustomProvider = createContext();

// Context Provider component
export const MyContextProvider = ({ children }) => {
  const [loginUserData, setLoginUserData] = useState();
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

  useEffect(() => {
    getUserData();
  }, []);
 
  const refreshUserData = () => {
    getUserData();
  };

  const contextValue = { loginUserData, setLoginUserData, getUserData, loading, refreshUserData };

  return <CustomProvider.Provider value={contextValue}>{children}</CustomProvider.Provider>;
};

// Custom hook to use the context
export const useMyContext = () => {
  return useContext(CustomProvider);
};
