import React, {useState} from 'react';
import './tooltip.css';
import '../../containers/header/header.css'


const Tooltip = ( {text, children, customClassName= ''} ) => {
  const [isVisible, setIsVisible] = useState(false)
  
  return (
    <div 
      className='keep-notes__tooltip'
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && <p className={`keep-notes__tooltip-text ${customClassName}`}>{text}</p>}
    </div>
  )
}

export default Tooltip
