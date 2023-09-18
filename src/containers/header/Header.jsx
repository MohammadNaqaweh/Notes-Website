import React from 'react';
import { RiMenuFill, RiSearchLine } from 'react-icons/ri';
import { RxReload, RxGear } from 'react-icons/rx';
import { BsViewStacked, BsGrid3X3GapFill } from 'react-icons/bs';
import logo from '../../assets/logo.png';
import channelPicture from '../../assets/channel-picture.jpg';

import './header.css';

const iconSize = 20;

const Header = () => {
  return (
    <div className='keep-notes__header'>
      <div className='keep-notes__header-section_left'>
        <div className='keep-notes__header-icon_container'>
          <RiMenuFill size={iconSize}/>
        </div>
        <img src={logo} alt="logo"/>
        <h3>Keep</h3>
      </div>
      <div className='keep-notes__header-section_searchbar'>
        <div className='keep-notes__header-icon_container'>
          <RiSearchLine size={iconSize}/>
        </div>
        <input placeholder='Search'/>
      </div>
      <div className='keep-notes__header-section_right'>
        <div className='keep-notes__header-icon_container hidden-icon'>
          <RiSearchLine size={iconSize}/>
        </div>
        <div className='keep-notes__header-icon_container'>
          <RxReload size={iconSize} />
        </div>
        <div className='keep-notes__header-icon_container'>
          <BsViewStacked size={iconSize} />
        </div>
        <div className='keep-notes__header-icon_container'>
          <RxGear size={iconSize} />
        </div>
      </div>
      <div className='keep-notes__header-section_accountinfo'>
        <div className='keep-notes__header-icon_container'>
          <BsGrid3X3GapFill size={iconSize} />
        </div>
        <img src={channelPicture} alt='channel picture' />
      </div>
    </div>
  )
}

export default Header
