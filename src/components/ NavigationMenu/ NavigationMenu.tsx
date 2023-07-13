import React from 'react';
import {Link} from "react-router-dom";
import Image from 'react-bootstrap/Image';
import logo from './logo.jpg'
import './index.css';
import Row from "react-bootstrap/Row";

const NavigationMenu = () => {

  return (
    <div className='wrap-nav'>
      <Row>
        <Image src={logo} alt="me" className='image'/>
      </Row>
      <Link to='/orders' className='link'>
        ПРИХОД
      </Link>
      <Link to='/products' className='link'>
        ПРОДУКТЫ
      </Link>
    </div>
  );
};

export default NavigationMenu;