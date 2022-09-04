import React from 'react'
import { ItemsNavigation } from './addItem.styled'
function Navigation() {
  return (
    <ItemsNavigation>
        <ul>
          <li>
            {/* <VerticalShadesIcon /> */}
            <span>მაღაზიის გახსნა</span>
          </li>
          <li>
            {/* <LibraryAddIcon /> */}
            <span>ნივთის დამატება</span>
          </li>
          <li>
            {/* <PublicIcon /> */}
            <span>ჩემი განცხადებები</span>
          </li>
        </ul>
        <ul>
          <li>
            {/* <ShoppingBasketIcon /> */}
            <span>ჩემი კალათა</span>
          </li>
          <li>
            {/* <FavoriteBorderIcon/ > */}
            <span>მოწონებული ნივთები</span>
          </li>
          <li>
            {/* <EditOffIcon /> */}
            <span>პროფილის რედაქტირება</span>
          </li>
          <li>
            {/* <LogoutIcon /> */}
            <span>სისტემიდან გასვლა</span>
          </li>
        </ul>
    </ItemsNavigation>
  )
}

export default Navigation
