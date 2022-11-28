import {useState} from 'react';
import './Booking.css';
import axios from 'axios';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

export default function Booking(props) {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  // const parseStartDate = (start) => {
  //   if (state[0].startDate != null) {
  //     return (start.toUTCString().split(" "))
  //   }
  // };
  
  //   const parseEndDate = (end) => {
  //     if (state[0].endDate != null) {
  //       return (end.toUTCString().split(" "))
  //     }

  // const saveDay = (starter, ender) => {
  //   const parseStartDate = (start) => {
  //   if (starter != null) {
  //     return (start.toUTCString().split(" "))
  //   }
  // };
  
  //   const parseEndDate = (end) => {
  //     if (ender != null) {
  //       return (end.toUTCString().split(" "))
  //     }
  //   };
  //   let start = parseStartDate(starter);
  //   let end = parseEndDate(ender);
  //   let day = {
  //     day: Number(start[1]),
  //     month: start[2],
  //     year: Number(start[3]),
  //   }

  //   if (start[2] === end[2]) {
  //     for (let i = Number(start[1]); i < Number(end[1]) + 1; i++) {
  //       day.day = i;
  //       axios.put('http://localhost:8080/bookedDays/', day)
  //         .then(console.log(day))
  //         .then(res => res.data)
  //         .catch(err => (console.log(err)))
  //     }
  //   } else if (day.month === "Jan" || day.month === "Mar" || day.month === "May" || day.month === "Jul" || day.month === "Aug" || day.month === "Oct" || day.month === "Dec") {
  //     for (let i = Number(start[1]); i < 32; i++) {
  //       day.day = i;
  //       axios.put('http://localhost:8080/bookedDays/', day)
  //         .then(console.log(day))
  //         .then(res => res.data)
  //         .catch(err => (console.log(err)))
  //     }
  //     for (let i = 1; i < Number(end[1]) + 1; i++) {
  //       day.day = i;
  //       day.month = end[2];
  //       day.year = Number(end[3])
  //       axios.put('http://localhost:8080/bookedDays/', day)
  //         .then(console.log(day))
  //         .then(res => res.data)
  //         .catch(err => (console.log(err)))
  //     }
  //   } else if (day.month === "Apr" || day.month === "Jun" || day.month === "Sep" || day.month === "Nov") {
  //     for (let i = Number(start[1]); i < 31; i++) {
  //       day.day = i;
  //       axios.put('http://localhost:8080/bookedDays/', day)
  //         .then(console.log(day))
  //         .then(res => res.data)
  //         .catch(err => (console.log(err)))
  //     }
  //     for (let i = 1; i < Number(end[1]) + 1; i++) {
  //       day.day = i;
  //       day.month = end[2];
  //       day.year = Number(end[3])
  //       axios.put('http://localhost:8080/bookedDays/', day)
  //         .then(console.log(day))
  //         .then(res => res.data)
  //         .catch(err => (console.log(err)))
  //     }
  //   } else if (day.month === "Feb") {
  //     for (let i = Number(start[1]); i < 29; i++) {
  //       day.day = i;
  //       axios.put('http://localhost:8080/bookedDays/', day)
  //         .then(console.log(day))
  //         .then(res => res.data)
  //         .catch(err => (console.log(err)))
  //     }
  //     for (let i = 1; i < Number(end[1]) + 1; i++) {
  //       day.day = i;
  //       day.month = end[2];
  //       axios.put('http://localhost:8080/bookedDays/', day)
  //         .then(console.log(day))
  //         .then(res => res.data)
  //         .catch(err => (console.log(err)))
  //     }
  //   }
  // }

  const newFunc = () => {
    props.saveDay(state[0].startDate, state[0].endDate)
  }

  // const getBookedDays = (daysList) => {
  //   let disabledDays = [];
  //   const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  //   for (let i = 0; i < daysList.length; i++) {
  //     disabledDays.push(new Date(daysList[i].year, months.indexOf(daysList[i].month), daysList[i].day))
  //   }
  //   return disabledDays
  // };

  return (
    <div className="booking">
      <DateRange 
        editableDateInputs={true}
        onChange={item => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
        minDate={new Date()}
        disabledDates={props.getBookedDays(props.state.bookedDays)}
      />
      <button className="saveBookingButton" onClick={newFunc}>Save Day</button>
    </div>
  );
};