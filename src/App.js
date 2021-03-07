import React from 'react';
import './App.css';
import GroupListContainer from './GroupListContainer';
import { Route } from "react-router-dom";

const App = () => {
  return (
    <Route path="/" render={() => <GroupListContainer />} />
  )
}

export default App;