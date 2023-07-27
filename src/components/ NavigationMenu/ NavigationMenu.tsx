import React from 'react';
import Image from 'react-bootstrap/Image';
import logo from './logo.jpg'
import './index.css';
import Row from "react-bootstrap/Row";
import Links from "../Links";
import {pathname} from "../../constans/constans";

const NavigationMenu = () => {

  return (
    <div className='wrap-nav'>
      <Row>
        <Image src={logo} alt="me" className='image'/>
      </Row>
        {
          pathname.length && pathname.map((item, index)=>
           <Links key={index} label={item.label} value={item.value}/>
          )
        }
    </div>
  );
};

export default NavigationMenu;