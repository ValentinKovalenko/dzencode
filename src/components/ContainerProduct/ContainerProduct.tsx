import './index.css';
import {ContainerTypesProps} from "./container.types";
import {MdDelete} from "react-icons/md";

const ContainerProduct: React.FC<ContainerTypesProps> = (
  {
    title,
    titleOrder,
    type,
    guarantee,
    price
  }) => {

  return (
    <div className='wrap-container'>
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
    </div>
  );
};

export default ContainerProduct;