import Time from "../Time";
import './index.css';
import dayjs from "dayjs";

const DataTime = () => {
  return (
    <div className='container-data'>
      <div>
      <p className='weekday'>{dayjs(new Date().toDateString()).format('dddd')}</p>
      <span className='month'>{dayjs(new Date().toDateString()).format('D MMM, YYYY')}</span>
      </div>
      <Time/>
    </div>
  );
};

export default DataTime;