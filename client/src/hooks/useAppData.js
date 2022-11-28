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

  const saveDay = (starter, ender) => {
    const parseStartDate = (start) => {
    if (starter != null) {
      return (start.toUTCString().split(" "))
    }
  };
  
    const parseEndDate = (end) => {
      if (ender != null) {
        return (end.toUTCString().split(" "))
      }
    };
    let start = parseStartDate(starter);
    let end = parseEndDate(ender);
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
    } else if (day.month === "Jan" || day.month === "Mar" || day.month === "May" || day.month === "Jul" || day.month === "Aug" || day.month === "Oct" || day.month === "Dec") {
      for (let i = Number(start[1]); i < 32; i++) {
        day.day = i;
        axios.put('http://localhost:8080/bookedDays/', day)
          .then(console.log(day))
          .then(res => res.data)
          .catch(err => (console.log(err)))
      }
      for (let i = 1; i < Number(end[1]) + 1; i++) {
        day.day = i;
        day.month = end[2];
        day.year = Number(end[3])
        axios.put('http://localhost:8080/bookedDays/', day)
          .then(console.log(day))
          .then(res => res.data)
          .catch(err => (console.log(err)))
      }
    } else if (day.month === "Apr" || day.month === "Jun" || day.month === "Sep" || day.month === "Nov") {
      for (let i = Number(start[1]); i < 31; i++) {
        day.day = i;
        axios.put('http://localhost:8080/bookedDays/', day)
          .then(console.log(day))
          .then(res => res.data)
          .catch(err => (console.log(err)))
      }
      for (let i = 1; i < Number(end[1]) + 1; i++) {
        day.day = i;
        day.month = end[2];
        day.year = Number(end[3])
        axios.put('http://localhost:8080/bookedDays/', day)
          .then(console.log(day))
          .then(res => res.data)
          .catch(err => (console.log(err)))
      }
    } else if (day.month === "Feb") {
      for (let i = Number(start[1]); i < 29; i++) {
        day.day = i;
        axios.put('http://localhost:8080/bookedDays/', day)
          .then(console.log(day))
          .then(res => res.data)
          .catch(err => (console.log(err)))
      }
      for (let i = 1; i < Number(end[1]) + 1; i++) {
        day.day = i;
        day.month = end[2];
        axios.put('http://localhost:8080/bookedDays/', day)
          .then(console.log(day))
          .then(res => res.data)
          .catch(err => (console.log(err)))
      }
    }
  }
  appData.saveDay = saveDay;

  return appData;
}