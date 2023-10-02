import React, { useState } from 'react'
import './sidebar-button.css'

const SidebarButton = ({ text, icon, isActive, sidevarHover, onClick }) => {
  const [ hover, setHover ] = useState(false);

  return (
    <div className={`keep-notes__sidebar-button ${isActive && "keep-notes__sidebar-button_active"} ${sidevarHover && "keep-notes__sidebar-button_hover"} ${hover && "keep-notes__sidebar-button_hover-button"}`} 
      onClick={onClick}
      onMouseEnter={() => {setHover(true)}}
      onMouseLeave={() => {setHover(false)}} 
      >
      <div className='keep-notes__sidebar-button_icon'>{icon}</div>
      {sidevarHover && <p>{text}</p>}
    </div>
  )
}

export default SidebarButton
