import React from 'react';
import '../styles/index.css';
import MenuContent from './Menu_Content';
import { Popover,
         Button,
         Menu,
         Position,
         Icon } from '@blueprintjs/core';

const Header = () => {
  return (
 <Popover content={<Menu><MenuContent /></Menu>}
  popoverClassName="pt-dark"
  position={ "top-left" }
  color="black">
   <Button position={ Position.TOP_LEFT }  color="black" >
   <Icon icon="menu" iconSize={70} position={ Position.TOP_LEFT } color="black" />
   </Button>
</Popover>
  )
}

export default Header;
