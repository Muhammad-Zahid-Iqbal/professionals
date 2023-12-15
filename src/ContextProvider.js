import React from 'react';
import { MyContextProvider } from './components/vertical-default/VerticalDefault';

const ContextProvider = ({ children }) => {
  return <MyContextProvider>{children}</MyContextProvider>;
};

export default ContextProvider;