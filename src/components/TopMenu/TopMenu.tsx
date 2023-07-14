import './index.css';
import DataTime from "../DataTime";

const TopMenu = () => {
  return (
    <div className='wrap-menu'>
      <div className='inventory-bloc'>
        <span className='inventory'>INVENTORY</span>
        <input className='form' type='text' placeholder='Поиск'/>
      </div>
      <DataTime/>
    </div>
  );
};

export default TopMenu;