import './index.css';
import {MdDelete, MdOutlineKeyboardArrowRight} from "react-icons/md";
import {openModal} from "../../store/modalSlice/modalSlice";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useSearchParams} from "react-router-dom";

const IconOrder: React.FC<{title: string, id: number}> = ({title,id,}) => {
  const [active, setActive] = useState(false)
  const dispatch = useDispatch();
  let [searchParams] = useSearchParams();
  const orderId = searchParams.get('orderId');

  useEffect(()=>{
      setActive(id === Number(orderId))
  },[orderId])

  return (
    <div className='icon-content'>
      {!orderId && <MdDelete cursor='pointer' onClick={()=>dispatch(openModal({title}))}/>}
      {active && <div className='fon'><MdOutlineKeyboardArrowRight size={25}/></div>  }
    </div>
  );
};

export default IconOrder;