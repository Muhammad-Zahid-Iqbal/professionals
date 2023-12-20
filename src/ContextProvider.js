import React from 'react';
import { MyContextProvider } from './components/context-user-data/ContextUserData';

const ContextProvider = ({ children }) => {
  return <MyContextProvider>{children}</MyContextProvider>;
};

export default ContextProvider;