import './App.css';
import axios from 'axios';
import {React, useState, useEffect} from 'react';
import useAppData from './hooks/useAppData'

function App() {
  const { state } = useAppData();

  const userList = (state.users).map((user) => {
    return (user.email)
  })
console.log(state)

  return (
    <main className="App">
      <h1>Hello World</h1>
      {userList}
    </main>
  );
}

export default App;
