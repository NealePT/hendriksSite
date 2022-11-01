import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';

function App() {
  const [data, setData] = useState("nothing");

  useEffect(() => {
    axios.get('http://localhost:8080/users').then(res => {
      console.log(res);
    })
  }, [])
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
