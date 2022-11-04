import './App.css';
import axios from 'axios';
import {React, useState, useEffect} from 'react';
import useAppData from './hooks/useAppData'

// Component imports
import NavBar from './components/NavBar';
import About from './components/About';
import Gallery from './components/Gallery';

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
      <About />
      <Gallery />
    </main>
  );
}

export default App;
