import './index.css';
import {useDispatch} from "react-redux";
import {closeModal} from "../../store/modalSlice/modalSlice";
import {MdDelete} from "react-icons/md";

const FooterModal = () => {
  const dispatch = useDispatch();
    return (
        <div className='button-content'>
            <button className='cancel' onClick={() => dispatch(closeModal({}))}>ОТМЕНИТЬ</button>
            <button className='delete' onClick={() => dispatch(closeModal({}))}><MdDelete className='delete-icon'/> УДАЛИТЬ</button>
        </div>
    );
};

export default FooterModal;