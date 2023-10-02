import React from 'react';
import { LeftSection, MiddleSection, RightSection } from '../../components/index.js';
import { useIsTop } from '../../hooks/useIsTop.js'
import './header.css';

const iconSize = 20;

const Header = ( {isHome, pageTitle} ) => {
  const isTop = useIsTop();

  return (
    <div className={`keep-notes__header ${!isTop && 'bottom-box-shadow'}`}>
      <LeftSection isHome={isHome} pageTitle={pageTitle} iconSize={iconSize}/>
      <MiddleSection iconSize={iconSize} />
      <RightSection iconSize={iconSize}/>
    </div>
  )
}

export default Header
