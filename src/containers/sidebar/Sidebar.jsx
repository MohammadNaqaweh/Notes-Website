import React from 'react';
import { LiaLightbulb } from 'react-icons/lia';
import { AiOutlineBell } from 'react-icons/ai';
import { GoPencil } from 'react-icons/go';
import { PiArchiveBox, PiTrash } from 'react-icons/pi';
import './sidebar.css';

const Sidebar = () => {
  const iconSize = 24;

  const btnData = [
    { 
      icon: <LiaLightbulb size={iconSize}/>,
      text: "Notes"
    },
    {
      icon: <AiOutlineBell size={iconSize} />,
      text: "Reminders"
    },
    {
      icon: <GoPencil size={iconSize} />,
      text: "Edit labels"
    },
    {
      icon: <PiArchiveBox size={iconSize} />,
      text: "Archive"
    },
    {
      icon: <PiTrash size={iconSize} />,
      text: "Trash"
    }
  ]

  return (
    <div className='keep-notes__sidebar'>
      <div className='keep-notes__sidebar-buttons_container'>
        {btnData.map((item,index)=>(
          <div className='keep-notes__sidebar-button'>
            <div className='keep-notes__sidebar-button_icon'>{item.icon}</div>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <div className='keep-notes__sidebar-footer'>
        <a href='https://keep.google.com/' target='_blank'>Open-source licenses</a>
      </div>
    </div>
  )
}

export default Sidebar
