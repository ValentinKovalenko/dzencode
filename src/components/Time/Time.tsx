import React, {useEffect, useState} from 'react';
import './index.css';
import {LuClock9} from "react-icons/lu";

const Time = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000)
  }, [])

  return (
    <>
      <div className='bloc-clock'>
        <span className='clock'><LuClock9/></span>
        <span>{time.toLocaleTimeString()}</span>
      </div>
    </>
  );
};

export default Time;