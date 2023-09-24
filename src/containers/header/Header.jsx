import React, { useState } from 'react';
import { BsGrid3X3GapFill } from 'react-icons/bs';
import { NavLink as Link, NavLink } from 'react-router-dom';

import channelPicture from '../../assets/channel-picture.jpg';

import { Tooltip, LeftSection, MiddleSection } from '../../components/index.js';
import './header.css';

const iconSize = 20;

const Header = ( {isHome, pageTitle} ) => {
  const [ isGrid, setIsGrid ] = useState(false);
  
  return (
    <div className='keep-notes__header'>
      <LeftSection isHome={isHome} pageTitle={pageTitle} iconSize={iconSize}/>
      <MiddleSection iconSize={iconSize} />
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
