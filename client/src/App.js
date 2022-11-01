import './App.css';
import axios from 'axios';
import {React, useState, useEffect} from 'react';

function App() {
  const [data, setData] = useState("");
  const [state, setState] = useState({
    users: [],
    bookedDays: [],
  });

  useEffect(() => {
    Promise.all([
      axios.get('/users')
    ])
    .then((all) => {
      console.log(all[0].data.users)
      setState(prev => ({
        ...prev,
        users: all[0].data.users
      }))
    })
  }, [])

  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>{!state.users[0] ? "Loading..." : state.users[0].email}</p>
      {console.log(state.users)}
    </div>
  );
}

export default App;
