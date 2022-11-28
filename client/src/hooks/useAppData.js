import { useState, useEffect } from "react";
import axios from "axios";

export default function useAppData() {
  const appData = {};

  const [state, setState] = useState({
    users: [],
    bookedDays: [],
  });

  useEffect(() => {
    Promise.all([
      axios.get('/users'),
      axios.get('/bookedDays')
    ]).then((all) => {
      const [users, bookedDays] = all;
      setState(prev => ({...prev, users: users.data.users, bookedDays: bookedDays.data.bookedDays}))
    })
  }, [])

  appData.state = state;

  const getBookedDays = (daysList) => {
    let disabledDays = [];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    for (let i = 0; i < daysList.length; i++) {
      disabledDays.push(new Date(daysList[i].year, months.indexOf(daysList[i].month), daysList[i].day))
    }
    return disabledDays
  };
  appData.getBookedDays = getBookedDays;

  return appData;
}