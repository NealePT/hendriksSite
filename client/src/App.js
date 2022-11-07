import './App.css';
import axios from 'axios';
import {React, useState, useEffect} from 'react';
import useAppData from './hooks/useAppData'
import Button from '@mui/material/Button';

// Component imports
import NavBar from './components/NavBar';
import About from './components/About';
import Gallery from './components/Gallery';
import Booking from './components/Booking';

function App() {
  const { state } = useAppData();

//   const userList = (state.users).map((user) => {
//     return (user.email)
//   })
console.log(state)

  return (
    <main className="App">
      <NavBar />
      <h1>Hello World</h1>
      <About />
      <Gallery />
      <Booking />
    </main>
  );
}

export default App;
