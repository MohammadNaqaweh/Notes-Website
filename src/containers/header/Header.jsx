import React, { useEffect, useState } from 'react';
import { LeftSection, MiddleSection, RightSection } from '../../components/index.js';
import './header.css';

const iconSize = 20;

const Header = ( {isHome, pageTitle} ) => {
  const [ top, setTop ] = useState(true);
  
  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };

    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top])

  return (
    <div className={`keep-notes__header ${!top && 'bottom-box-shadow'}`}>
      <LeftSection isHome={isHome} pageTitle={pageTitle} iconSize={iconSize}/>
      <MiddleSection iconSize={iconSize} />
      <RightSection iconSize={iconSize}/>
    </div>
  )
}

export default Header
