import './index.css';
import {BsFillPlusCircleFill} from "react-icons/bs";
import React, {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {useGetProductsQuery} from "../../store/apiSlice/apiSlice";
import {ContainerTypesProps} from "../ContainerProduct/container.types";
import {IoIosClose} from "react-icons/io";
import {MdDelete} from "react-icons/md";
import {PopupProductTypes} from "./popupProduct.types";
import { motion } from 'framer-motion';

const PopupProduct: React.FC<{setToggle: any, data: PopupProductTypes[]}> = ({setToggle, data}) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const orderId = searchParams.get('orderId');
  const {data: productData} = useGetProductsQuery({params: {order: orderId}})

  const closePopup = () => {
    setToggle(true)
    searchParams.delete('orderId')
    setSearchParams(searchParams)
  }

  useEffect(()=>{
    if(!searchParams.has('orderId')){
      setToggle(true)
    }
  },[searchParams])

  const titleOrder = data?.filter((item)=> item.id === Number(orderId))

  return (
    <motion.div
      initial={{x: 50, opacity: 0,}}
      animate={{opacity: 1, x: 0}}
      transition={{duration: 0.5}}
      className='popup'>
      <div className='popup-content'>
        <div className='close-popup'>
          <IoIosClose onClick={closePopup} size={20}/>
        </div>
        <div>
          <p className='header-popup'>{titleOrder?.length ? titleOrder[0].title : ''}</p>
          <span className='add'><BsFillPlusCircleFill size={15} cursor='pointer'/>
            <span className='small-add'>Добавить продукт</span>
          </span>
        </div>
        {
          productData && productData?.map((product: ContainerTypesProps) =>
            <div key={product.id} className='product-content'>
              <div>
                <p>{product?.title}</p>
                <p className='type'>{product?.type}</p>
              </div>
              <span className='remove'><MdDelete cursor='pointer'/></span>
            </div>
          )
        }
      </div>
    </motion.div>
  );
};

export default PopupProduct;