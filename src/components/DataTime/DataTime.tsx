import Time from "../Time";
import './index.css';
import {month, weekday} from "../../constans/constans";

const DataTime = () => {

  return (
    <div className='container-data'>
      <div>
      <p className='weekday'>{weekday}</p>
      <span className='month'>{month}</span>
      </div>
      <Time/>
    </div>
  );
};

export default DataTime;