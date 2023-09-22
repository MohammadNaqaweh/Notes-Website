import React from 'react';
import { RiMenuFill, RiSearchLine } from 'react-icons/ri';
import { RxReload, RxGear } from 'react-icons/rx';
import { BsViewStacked, BsGrid3X3GapFill } from 'react-icons/bs';
import { NavLink as Link, NavLink } from 'react-router-dom';

import logo from '../../assets/logo.png';
import channelPicture from '../../assets/channel-picture.jpg';

import { Tooltip } from '../../components/index.js';

import './header.css';

const iconSize = 20;

const Header = ( {isHome, pageTitle} ) => {
  return (
    <div className='keep-notes__header'>
      <div className='keep-notes__header-section_left'>
        <Tooltip text={"Main menu"}>
          <RiMenuFill size={iconSize}/>
        </Tooltip>
        <NavLink className="keep-notes__header-navlink" to="/home">
          {isHome && <img src={logo} alt="logo"/>}
          <h3>{pageTitle}</h3>
        </NavLink>
      </div>
      <div className='keep-notes__header-section_searchbar'>
        <Tooltip text={"Serach"}>
          <RiSearchLine size={iconSize}/>
        </Tooltip>
        <input placeholder='Search'/>
      </div>
      <div className='keep-notes__header-section_right'>
        <Tooltip text={"Search"}>
          <RiSearchLine size={iconSize}/>
        </Tooltip>
        <Tooltip text={"Refresh"}>
          <RxReload size={iconSize} />
        </Tooltip>
        <Tooltip text={"List View"}>
          <BsViewStacked size={iconSize} />
        </Tooltip>
        <Tooltip text={"Settings"}>
          <RxGear size={iconSize} />
        </Tooltip>
      </div>
      <div className='keep-notes__header-section_accountinfo'>
        <Tooltip text={"Google Apps"}>
          <BsGrid3X3GapFill size={iconSize} />
        </Tooltip>
        <img src={channelPicture} alt='channel picture' />
      </div>
    </div>
  )
}

export default Header
