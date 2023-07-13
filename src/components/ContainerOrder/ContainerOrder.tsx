import './index.css';
import {TfiMenuAlt} from "react-icons/tfi";
import {useGetProductsQuery} from "../../store/apiSlice/apiSlice";
import {OrderTypesProps} from "./containerOrder.types";
import {PriceTypesProps} from "../../store/apiSlice/apiSlice.types";
import React from "react";
import {useSearchParams} from "react-router-dom";
import IconOrder from "../IconOrder";
import dayjs from "dayjs";

const ContainerOrder: React.FC<OrderTypesProps> = ({title, date, toggle, id,setToggle}) => {
  const {data: productData} = useGetProductsQuery({params: {order: id}})
  let [searchParams, setSearchParams] = useSearchParams();

  const openPopup = () => {
    searchParams.set('orderId', id.toString());
    setSearchParams(searchParams);
    setToggle(false)
  };

  const prices = productData?.reduce((acc: any, cur: any) => {
    return cur.price.map((item: PriceTypesProps) => {
      const prev = acc?.find((price: PriceTypesProps) => price.symbol === item.symbol);
      const prevValue = prev?.value ?? 0;
      return {
        ...item,
        value: prevValue + item.value,
      }
    });
  }, []);

  return (
    <div className='wrap-container-order'>
      {toggle &&
          <div>
              <p>{title}</p>
          </div>
      }
      <div className='icon-bloc'>
        <div className='icon-order-container'><TfiMenuAlt cursor='pointer' onClick={()=>openPopup()} size={20}/></div>
        <div>
          <p>{productData?.length}</p>
          <p className='small-text-order'>Продукта</p>
        </div>
      </div>
      <div>
        <p className='small-text-order'>{dayjs(date).format('DD/MM')}</p>
        <p>{date}</p>
      </div>
      {
        toggle &&
          <div>
            {prices ? prices.map((item: PriceTypesProps) =>
              <div key={item.isDefault} className={item.symbol === 'USD' ? 'small-text' : ''}>
                <span>{item.value} </span>
                <span className='small-text'>{item.symbol === 'USD' ? '$' : 'UAH'}</span>
              </div>) : ''}
          </div>
      }
       <IconOrder title={title} id={id}/>
    </div>
  );
};

export default ContainerOrder;