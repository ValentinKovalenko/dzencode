import React, {useEffect, useState} from 'react';
import './index.css';
import {LuClock9} from "react-icons/lu";

const Time = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000)
  }, [])

  return (
    <div>
      <p className='weekday'>Вторник</p>
      <div className='bloc-clock'>
        <span>06 Апр, 2023</span>
        <span className='clock'><LuClock9/></span>
        <span>{time.toLocaleTimeString()}</span>
      </div>
    </div>
  );
};

export default Time;