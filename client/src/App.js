import './App.css';
import {React} from 'react';
import useAppData from './hooks/useAppData'

// Component imports
import NavBar from './components/NavBar';
import About from './components/About';
import Gallery from './components/Gallery';
import Booking from './components/Booking';

function App() {
  const { state, getBookedDays, saveDay } = useAppData();

// console.log(state.bookedDays)

  return (
    <main className="App">
      <NavBar />
      <About />
      <Gallery />
      <Booking 
        state={state}
        getBookedDays={getBookedDays}
        saveDay={saveDay}
      />
    </main>
  );
}

export default App;
