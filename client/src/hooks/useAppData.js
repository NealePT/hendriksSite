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

  return appData;
}