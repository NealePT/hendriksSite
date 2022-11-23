import {useState} from 'react';
import './Booking.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

export default function Booking(props) {

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);
  
    const parseStartDate = (start) => {
    if (state[0].startDate != null) {
      return (start.toUTCString().split(" "))
    }
  };

  const parseEndDate = (end) => {
    if (state[0].endDate != null) {
      return (end.toUTCString().split(" "))
    }
  };

  const saveDay = () => {
  let start = parseStartDate(state[0].startDate);
  let end = parseEndDate(state[0].endDate);
  let day = {
    day: Number(start[1]),
    month: start[2],
    year: Number(start[3]),
  }
  if (start[2] === end[2]) {
    for (let i = Number(start[1]); i < Number(end[1]) + 1; i++) {
      day.day = i;
      axios.put('http://localhost:8080/bookedDays/', day)
        .then(console.log(day))
        .then(res => res.data)
        .catch(err => (console.log(err)))
    }
  }
  }

  return (
    <div className="booking">
      <DateRange 
        editableDateInputs={true}
        onChange={item => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
      />
      <button onClick={saveDay}>Save Day</button>
    </div>
  );
};