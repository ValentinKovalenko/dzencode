import './index.css';
import {ContainerTypesProps} from "./container.types";
import {MdDelete} from "react-icons/md";
import { motion } from 'framer-motion';

const ContainerProduct: React.FC<ContainerTypesProps> = (
  {
    title,
    titleOrder,
    type,
    guarantee,
    price
  }) => {

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className='wrap-container'>
      <div>
        <p className='name-product'>{title}</p>
        <p>{type}</p>
      </div>
      <div>
        <p><span className='small-text'>c</span>  {guarantee.start}</p>
        <p><span className='small-text'>по</span> {guarantee.end}</p>
      </div>
      <div>
      {price ? price.map((item) =>
        <div key={item.isDefault} className={item.symbol === 'USD' ? 'small-text' : ''}>
          <span>{item.value} </span>
          <span className='small-text'>{item.symbol === 'USD' ? '$' : 'UAH'}</span>
        </div>) : ''}
      </div>
      <span>{titleOrder}</span>
      <MdDelete cursor='pointer'/>
    </motion.div>
  );
};

export default ContainerProduct;