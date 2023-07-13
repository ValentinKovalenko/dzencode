import './index.css';
import Time from "../Time";

const TopMenu = () => {
  return (
    <div className='wrap-menu'>
      <div className='inventory-bloc'>
        <span className='inventory'>INVENTORY</span>
        <input className='form' type='text' placeholder='Поиск'/>
      </div>
      <Time/>
    </div>
  );
};

export default TopMenu;