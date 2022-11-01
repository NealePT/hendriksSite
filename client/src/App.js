import './App.css';
import axios from 'axios';
import {React, useState, useEffect} from 'react';
import useAppData from './hooks/useAppData'

function App() {
  const { state } = useAppData();

  const userList = (state.users).map((user) => {
    // console.log(user)
    return (user.email)
  })
console.log(state)

  // const [data, setData] = useState("");
  // const [state, setState] = useState({
  //   users: [],
  //   bookedDays: [],
  // });

  // useEffect(() => {
  //   Promise.all([
  //     axios.get('/users'),
  //     axios.get('bookedDays')
  //   ])
  //   .then((all) => {
  //     const [users, bookedDays] = all;
  //     setState(prev => ({
  //       ...prev,
  //       users: users.data,
  //       bookedDays: bookedDays.data
  //     }))
  //   })
  // }, [])

  return (
    <main className="App">
      <h1>Hello World</h1>
      {userList}
    </main>
  );
}

export default App;
