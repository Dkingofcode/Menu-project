import React from 'react'
import MenuItem from './MenuItem';

const Menu = ({ menu }) => {
  return (
    <div>
    {menu.map((menuitem) => {
        return( 
        <MenuItem key={menuitem.id} {...menuitem} />
        )
    })}
    </div>
  )
}

export default Menu;