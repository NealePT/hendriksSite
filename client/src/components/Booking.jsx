import {useState} from 'react';
import './Booking.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

export default function Booking(props) {
  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(null);

  // const onChange = (dates) => {
  //   const [start, end] = dates;
  //   setStartDate(start);
  //   setEndDate(end);
  // };

  // const parseStartDate = (start) => {
  //   if (startDate !== null) {
  //     return (start.toUTCString().split(" "))
  //   }
  // };

  // const parseEndDate = (end) => {
  //   if (endDate !== null) {
  //     return (end.toUTCString().split(" "))
  //   }
  // };
  // console.log(parseStartDate(startDate))
  // console.log(parseEndDate(endDate))

  // const saveDay = () => {
  //   let start = parseStartDate(startDate);
  //   let end = parseEndDate(endDate);
  //   const day = {
  //     day: Number(start[1]),
  //     month: start[2],
  //     year: Number(start[3]),
  //   }
  //   // for (let i = day.day; i < Number(end[1]); i++) {
  //   //   console.log(day[i]);
  //   // }
  //   axios.put('http://localhost:8080/bookedDays/', day)
  //   .then(console.log(day))
  //     .then(res => res.data)
  //     .catch(err => (console.log(err)))
  // }
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
  console.log(parseStartDate(state[0].startDate))
  console.log(parseEndDate(state[0].endDate))


  const saveDay = () => {
  let start = parseStartDate(state[0].startDate);
  let end = parseEndDate(state[0].endDate);
  const day = {
    day: Number(start[1]),
    month: start[2],
    year: Number(start[3]),
  }
  axios.put('http://localhost:8080/bookedDays/', day)
  .then(console.log(day))
    .then(res => res.data)
    .catch(err => (console.log(err)))
  }

  return (
    <div className="booking">
      {/* <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
      /> */}
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