import React from 'react';
import { BsGrid3X3GapFill } from 'react-icons/bs';

import { Tooltip } from '../index.js';
import './right-section.css';

import channelPicture from '../../assets/channel-picture.jpg';


const RightSection = ({ iconSize }) => {
  return (
    <div className='keep-notes__header-right_section'>
      <Tooltip text={"Google Apps"}>
        <BsGrid3X3GapFill size={iconSize} />
      </Tooltip>
      <img src={channelPicture} alt='channel picture' />
    </div>
  )
}

export default RightSection
