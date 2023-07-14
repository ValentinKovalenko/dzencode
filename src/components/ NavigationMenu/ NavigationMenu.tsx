import React from 'react';
import {Link, useLocation} from "react-router-dom";
import Image from 'react-bootstrap/Image';
import logo from './logo.jpg'
import './index.css';
import Row from "react-bootstrap/Row";

const NavigationMenu = () => {
const location= useLocation()

  return (
    <div className='wrap-nav'>
      <Row>
        <Image src={logo} alt="me" className='image'/>
      </Row>
      <Link to='/orders' className={location.pathname.includes('orders') ? 'link active-link' : 'link'}>
        ПРИХОД
      </Link>
      <Link to='/products' className={location.pathname.includes('products') ? 'link active-link' : 'link'}>
        ПРОДУКТЫ
      </Link>
    </div>
  );
};

export default NavigationMenu;