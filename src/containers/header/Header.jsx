import React, { useState } from 'react';
import { LeftSection, MiddleSection, RightSection } from '../../components/index.js';
import './header.css';

const iconSize = 20;

const Header = ( {isHome, pageTitle} ) => {
  const [ isGrid, setIsGrid ] = useState(false);
  
  return (
    <div className='keep-notes__header'>
      <LeftSection isHome={isHome} pageTitle={pageTitle} iconSize={iconSize}/>
      <MiddleSection iconSize={iconSize} />
      <RightSection iconSize={iconSize}/>
    </div>
  )
}

export default Header
