import React, { useEffect, useState } from 'react';
import { LiaLightbulb } from 'react-icons/lia';
import { AiOutlineBell } from 'react-icons/ai';
import { GoPencil } from 'react-icons/go';
import { PiArchiveBox, PiTrash } from 'react-icons/pi';
import { SidebarButton } from '../../components/index.js'
import './sidebar.css';

const Sidebar = () => {
  const [activeIndex, setActiveIndex ] = useState(0);
  const [ hover, setHover ] = useState(false);
  useEffect(()=>{console.log(activeIndex)},[activeIndex]);
  
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
    <div className={`keep-notes__sidebar ${hover && "keep-notes__sidebar_hover"}`}
      onMouseEnter={() => {setHover(true)}} 
      onMouseLeave={() => {setHover(false)}}>
      <div className='keep-notes__sidebar-buttons_container'>
        {btnData.map((item,index)=>(
          <SidebarButton
            text={item.text}
            icon={item.icon}
            isActive={index === activeIndex}
            sidevarHover={hover}
            key={index}
            onClick={() => {setActiveIndex(index)}}
          />
        ))}
      </div>
      <div className='keep-notes__sidebar-footer'>
        {hover && <a href='https://keep.google.com/' target='_blank'>Open-source licenses</a>}
      </div>
    </div>
  )
}

export default Sidebar
