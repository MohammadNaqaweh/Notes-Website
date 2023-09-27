import React, { useState } from 'react';
import { LiaLightbulb } from 'react-icons/lia';
import { AiOutlineBell } from 'react-icons/ai';
import { GoPencil } from 'react-icons/go';
import { PiArchiveBox, PiTrash } from 'react-icons/pi';
import './sidebar.css';

const Sidebar = () => {
  const [ isHover, setIsHover] = useState(false);
  
  const iconSize = 24;
  
  return (
    <div className='keep-notes__sidebar' 
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}>
      <div className='keep-notes__sidebar-buttons_container'>
        <div className='keep-notes__sidebar-button'>
          <div className='keep-notes__sidebar-button_icon'> <LiaLightbulb size={iconSize} /></div>
          <p>Notes</p>
        </div>
        <div className='keep-notes__sidebar-button'>
          <div className='keep-notes__sidebar-button_icon'><AiOutlineBell size={iconSize} /></div>
          <p>Reminders</p>
        </div>
        <div className='keep-notes__sidebar-button'> 
          <div className='keep-notes__sidebar-button_icon'><GoPencil size={iconSize} /></div>
          <p>Edit labels</p>
        </div>
        <div className='keep-notes__sidebar-button'>
          <div className='keep-notes__sidebar-button_icon'><PiArchiveBox size={iconSize} /></div>
          <p>Archive</p>
        </div>
        <div className='keep-notes__sidebar-button'>
          <div className='keep-notes__sidebar-button_icon'><PiTrash size={iconSize} /></div>
          <p>trash</p>
        </div>
      </div>
      <div className='keep-notes__sidebar-footer'>
        <a href='https://keep.google.com/' target='_blank'>Open-source licenses</a>
      </div>
    </div>
  )
}

export default Sidebar
