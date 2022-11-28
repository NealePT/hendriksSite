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

  const save = () => {
    props.saveDay(state[0].startDate, state[0].endDate)
  }

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
      <button className="saveBookingButton" onClick={save}>Save Day</button>
    </div>
  );
};