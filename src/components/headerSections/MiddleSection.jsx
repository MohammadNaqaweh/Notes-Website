import React, { useState, useEffect } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { RxReload, RxGear } from 'react-icons/rx';
import { BsViewStacked, BsGrid3X3GapFill } from 'react-icons/bs';
import { HiOutlineSquares2X2 } from 'react-icons/hi2'

import { Tooltip } from '../index.js';
import './middle-section.css'

const MiddleSection = ({ iconSize }) => {
  const [ listView, setListView ] = useState();

  useEffect(() => {
    setListView(JSON.parse(localStorage.getItem("KEEP_NOTES_List_VIEW")) || true)
  }, [])

  useEffect(() => {
    localStorage.setItem("KEEP_NOTES_List_VIEW",JSON.stringify(listView));
  }, [listView])

  return (
    <div className='keep-notes__header-middle_section'>
      <div className='keep-notes__header-middle_section-searchbar'>
        <div className='keep-notes__header-middle_section-searchbar_search-icon'>
          <Tooltip text={"Serach"}>
            <RiSearchLine size={iconSize}/>
          </Tooltip>
        </div>
        <input placeholder='Search'/>
      </div>
      <div className='keep-notes__header-middle_section-icons_container'>
        <Tooltip text={"Search"}>
          <RiSearchLine size={iconSize}/>
        </Tooltip>
        <Tooltip text={"Refresh"}>
          <RxReload size={iconSize} />
        </Tooltip>
        {listView
        ? <Tooltip text={"Grid View"}><HiOutlineSquares2X2 size={iconSize} onClick={() => setListView(false) }/></Tooltip>
        : <Tooltip text={"List View"}><BsViewStacked size={iconSize} onClick={() => setListView(true) }/></Tooltip> 
        }
        <Tooltip text={"Settings"}>
          <RxGear size={iconSize} />
        </Tooltip>
      </div>
    </div>
  )
}

export default MiddleSection
