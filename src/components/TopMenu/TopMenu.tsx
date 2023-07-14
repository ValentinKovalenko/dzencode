import './index.css';
import DataTime from "../DataTime";
import {motion} from "framer-motion";
import {textAnimation} from "../../constans/constans";


const TopMenu = () => {
  return (
    <motion.div className='wrap-menu'>
      <motion.div
        initial={{x: -100, opacity: 0,}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 2}}
        className='inventory-bloc'
      >
        <span  className='inventory'>INVENTORY</span >
        <input className='form' type='text' placeholder='Поиск'/>
      </motion.div>
      <DataTime/>
    </motion.div>
  );
};

export default TopMenu;