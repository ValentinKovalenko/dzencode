import './index.css';
import {useGetOrdersQuery} from "../../store/apiSlice/apiSlice";
import ContainerOrder from "../../components/ContainerOrder";
import {BsFillPlusCircleFill} from "react-icons/bs";
import React, {useState} from "react";
import PopupProduct from "../../components/PopupProduct";

const Orders = () => {
  const {data} = useGetOrdersQuery({});
  const [toggle, setToggle] = useState(true)

  return (
    <div className='wrap-order'>
      <div className='header'>
        <span className='icon-order'><BsFillPlusCircleFill size={20}/></span>
        <h3>Приходы / {data?.length ? data?.length : '0'}</h3>
      </div>
        <div className={!toggle ? 'wrap-order-toggle' : ''}>
          {data ? data.map((order: any) =>
              <ContainerOrder
                id={order?.id}
                key={order?.id}
                toggle={toggle}
                title={order?.title}
                date={order?.date}
                setToggle={setToggle}
              />
            )
            :
            ''
          }
          {!toggle && <PopupProduct/>}
      </div>
    </div>
  );
};

export default Orders;