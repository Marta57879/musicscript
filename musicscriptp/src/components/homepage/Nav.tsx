/** @jsxImportSource theme-ui */

import React from 'react';
import MenuButton from '../atoms/MenuButton';

function Nav() {
  return (
    <div style={nav}>
        {/* <h1>Opera reader</h1> */}
        <MenuButton text={'About'} />
        <MenuButton text={'Scores'} />
        <MenuButton text={'Gallery'} />
    </div>     
  );
}

export default Nav;

// styles
const nav: React.CSSProperties | undefined = {
  maxWidth: "100%",
  height: "80px", 
  backgroundColor: "backgroundColorNav", 
  color: "White", 
  textAlign: "center", 
  display: "flex", 
  alignItems: "center", 
  justifyContent: "flex-start"
}