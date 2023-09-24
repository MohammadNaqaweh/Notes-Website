import React from 'react';
import { RiMenuFill } from 'react-icons/ri';
import { NavLink as Link, NavLink } from 'react-router-dom';

import { Tooltip } from '../index.js';

import logo from '../../assets/logo.png';

import './left-section.css';

const LeftSection = ({ iconSize, isHome, pageTitle }) => {
  return (
    <div className='keep-notes__header-section_left'>
      <Tooltip text={"Main menu"}>
        <RiMenuFill size={iconSize}/>
      </Tooltip>
      <NavLink className="keep-notes__header-navlink" to="/home">
        {isHome && <img src={logo} alt="logo"/>}
        <h3>{pageTitle}</h3>
      </NavLink>
    </div>
  )
}

export default LeftSection
