import './index.css';
import {IoIosClose} from "react-icons/io";
import {useDispatch} from "react-redux";
import {closeModal} from "../../store/modalSlice/modalSlice";
import FooterModal from "../FooterModal";

const Modal: React.FC<{title: null}> = ({title}) => {
  const dispatch = useDispatch();

  return (
    <div className='modal' onClick={() => dispatch(closeModal({}))}>
      <div className='modal-content' onClick={e => e.stopPropagation()}>
        <div className='close'>
          <IoIosClose size={20} onClick={() => dispatch(closeModal({}))}/>
        </div>
          <h4>Вы уверены что хотите удалить этот приход?</h4>
        <div className='title'>
          {title}
        </div>
        <FooterModal/>
      </div>
    </div>
  )
};

export default Modal;