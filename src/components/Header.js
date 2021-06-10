import React, { useState } from 'react';
  
//   --------------------------
function Header(props) {
    // console.log(props.isDarkMode)

    return (
      <header>
        <h2>Shopster</h2>
        <button onClick={() => props.onDarkModeClick(!props.isDarkMode)}>
          {props.isDarkMode ? "Dark" : "Light"} Mode
        </button>
    </header>
    )
}

export default Header;