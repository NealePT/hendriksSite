import {useState} from 'react';
import './Booking.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Booking(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const parseDate = (start, end) => {
    if (startDate !== null && endDate !== null) {
      console.log(start.toUTCString().split(" "))
      console.log(end.toUTCString().split(" "))
    }
  };
  console.log(parseDate(startDate, endDate))

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
    </div>
  );
};