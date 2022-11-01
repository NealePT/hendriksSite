import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';

function App() {
  const [data, setData] = useState("nothing");

  useEffect(() => {
    axios.get('http://localhost:8080/users')
    .then(res => {
      console.log(res.data.users[0]) 
      setData(res.data.users[0].email)
    })
  }, [])
  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>{!data ? "Loading..." : data}</p>
    </div>
  );
}

export default App;
