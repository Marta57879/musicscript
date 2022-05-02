/** @jsxImportSource theme-ui */

import React from 'react';
import MenuButton from '../atoms/MenuButton';
// @ts-ignore
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { Flex } from 'theme-ui';

function Nav() {
  return (
  <Flex sx={ {
    position: 'relative',
    maxWidth: "100%",
    height: "80px", 
    backgroundColor: "backgroundColorNav", 
    color: "White", 
    textAlign: "center",   
    alignItems: "center", 
    justifyContent: "center",
    margin: 10
  }}>
      <Flex sx={{position: 'absolute', left: 0 }}>
            <MenuButton text={'About'} />
            <MenuButton text={'Scores'} />
            <MenuButton text={'Gallery'} />
        </Flex>
        <Flex sx={{alignSelf: 'center', color: 'colorBlack', fontSize: 24, fontWeight: 700}}>
            Music Score
        </Flex>  
    </Flex>
    
  );
}

export default Nav;

