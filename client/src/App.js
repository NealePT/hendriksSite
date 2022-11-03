import './App.css';
import axios from 'axios';
import {React, useState, useEffect} from 'react';
import useAppData from './hooks/useAppData'
import NavBar from './components/NavBar';


function App() {
  const { state } = useAppData();

//   const userList = (state.users).map((user) => {
//     return (user.email)
//   })
// console.log(state)

  return (
    <main className="App">
      <NavBar />
      <h1>Hello World</h1>
    </main>
  );
}

export default App;
