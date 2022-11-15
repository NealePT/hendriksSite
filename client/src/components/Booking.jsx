import {useState} from 'react';
import './Booking.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default function Booking(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const parseStartDate = (start) => {
    if (startDate !== null) {
      return (start.toUTCString().split(" "))
    }
  };

  const parseEndDate = (end) => {
    if (endDate !== null) {
      return (end.toUTCString().split(" "))
    }
  };
  // console.log(parseStartDate(startDate))
  // console.log(parseEndDate(endDate))

  const saveDay = () => {
    let start = parseStartDate(startDate);
    let end = parseEndDate(endDate);
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
      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
      />
      <button onClick={saveDay}>Save Day</button>
    </div>
  );
};