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
      axios.get('/users'),
      axios.get('bookedDays')
    ])
    .then((all) => {
      // console.log(all[0].data.users)
      const [users, bookedDays] = all;
      setState(prev => ({
        ...prev,
        users: users.data,
        bookedDays: bookedDays.data
      }))
    })
  }, [])

  return (
    <div className="App">
      <h1>Hello World</h1>
      {/* <p>{!state.users.users ? "Loading..." : state.bookedDays}</p> */}
      {/* {console.log(state.bookedDays.bookedDays)} */}
    </div>
  );
}

export default App;
