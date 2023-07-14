import './index.css';
import {useGetOrdersQuery} from "../../store/apiSlice/apiSlice";
import {BsFillPlusCircleFill} from "react-icons/bs";
import { useState} from "react";
import PopupProduct from "../../components/PopupProduct";
import { motion } from 'framer-motion';
import {textAnimation} from "../../constans/constans";
import ContainerOrder from "../../components/ContainerOrder/ContainerOrder";

const Orders = () => {
  const {data} = useGetOrdersQuery({});
  const [toggle, setToggle] = useState(true)

  return (
    <motion.div initial='hidden' whileInView='visible' className='wrap-order'>
      <div className='header'>
        <span className='icon-order'><BsFillPlusCircleFill size={20}/></span>
          <motion.h3
            initial={{x: 100, opacity: 0,}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 1}}
          >Приходы / {data?.length ? data?.length : '0'}</motion.h3>
      </div>
        <div className={!toggle ? 'wrap-order-toggle' : ''}>
          {data ? data.map((order: any, index: number) =>
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
          {!toggle && <PopupProduct setToggle={setToggle} data={data}/>}
      </div>
    </motion.div>
  );
};

export default Orders;