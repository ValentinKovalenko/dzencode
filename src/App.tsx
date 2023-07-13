import NavigationMenu from "./components/ NavigationMenu";
import {Route, Routes} from "react-router-dom";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import TopMenu from "./components/TopMenu";
import './index.css';
import Modal from "./components/Modals";
import {useSelector} from "react-redux";
import {RootState} from "./store";

function App() {
  const {isOpen: isOpen, title} = useSelector((store: RootState) => store.modal)
  return (
    <>
      {isOpen && <Modal title={title} />}
      <TopMenu/>
      <div className='wrap-app'>
        <NavigationMenu/>
        <Routes>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/products' element={<Products/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
