import React from 'react';

import './settings-menu.css';

const SettingsMenu = () => {
  return (
    <div className='keep-notes__settings-menu scale-up-center'>
      <div className='keep-notes__settings-menu_container'>
        <p>Settings</p>
        <p>Disable dark theme</p>
        <p>Send feedback</p>
        <p>Help</p>
        <p>App downloads</p>
        <p>Keyboard shourtcuts</p>
      </div>
    </div>
  )
}

export default SettingsMenu
