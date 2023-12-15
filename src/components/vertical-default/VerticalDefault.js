import React, { createContext, useContext, useReducer, useState, useEffect } from 'react';
import { authUserData } from '../../backendservices/ApiCalls';

const CustomProvider = createContext();

// Optional: If you are using a reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, data: action.payload };
    // Add more cases as needed
    default:
      return state;
  }
};

// Context Provider component
export const MyContextProvider = ({ children }) => {
  const [loginUserData, setLoginUserData] = useState();
  const [loading,setLoading]=useState(null)
  
  const getUserData = () => {
    setLoading(true)
    authUserData(
      (response) => {
        console.log("response22", response?.data?.data)
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

  const [state, dispatch] = useReducer(reducer, {
    data: null,
    // Add initial state properties here
  });

  const setData = (newData) => {
    dispatch({ type: 'SET_DATA', payload: newData });
  };
  const refreshUserData = () => {
    getUserData();
  };

  // Add more functions as needed

  const contextValue = {
    loginUserData,
    setLoginUserData,
    getUserData,
    loading,
    state,
    setData,
    refreshUserData
    // Add functions to context value
  };

  return <CustomProvider.Provider value={contextValue}>{children}</CustomProvider.Provider>;
};

// Custom hook to use the context
export const useMyContext = () => {
  return useContext(CustomProvider);
};
