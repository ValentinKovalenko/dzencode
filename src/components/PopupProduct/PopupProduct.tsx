import './index.css';
import {BsFillPlusCircleFill} from "react-icons/bs";
import React from "react";
import {useSearchParams} from "react-router-dom";
import {useGetProductsQuery} from "../../store/apiSlice/apiSlice";
import {ContainerTypesProps} from "../ContainerProduct/container.types";

const PopupProduct = () => {
  let [searchParams,] = useSearchParams();
  const orderId = searchParams.get('orderId');
  const {data: productData} = useGetProductsQuery({params: {order: orderId}})

  return (
    <div className='popup'>
      <div className='popup-content'>
        <div>
          <p>PopupProduct</p>
          <span><BsFillPlusCircleFill size={20}/>Добавить продукт</span>
        </div>
        {
          productData && productData?.map((product: ContainerTypesProps)=>
            <div>{product.title} {product.type}</div>
          )
        }
      </div>
    </div>
  );
};

export default PopupProduct;