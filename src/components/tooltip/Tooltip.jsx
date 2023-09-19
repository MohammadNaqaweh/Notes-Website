import React, {useState} from 'react';
import './tooltip.css';
import '../../containers/header/header.css'


const Tooltip = ( {text, children} ) => {
  const [isVisible, setIsVisible] = useState(false)
  
  return (
    <div 
      className='keep-notes__tooltip'
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && <div className='keep-notes__tooltip-text'>{text}</div>}
    </div>
  )
}

export default Tooltip
