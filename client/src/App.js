import './App.css';
import {React} from 'react';
import useAppData from './hooks/useAppData'

// Component imports
import NavBar from './components/NavBar';
import About from './components/About';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import StripeBtn from './components/Payment';

function App() {
  const { state, getBookedDays, saveDay } = useAppData();

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
      <StripeBtn />
    </main>
  );
}

export default App;
