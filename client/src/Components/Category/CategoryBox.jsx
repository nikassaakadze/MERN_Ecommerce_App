import React from 'react'
import { Block } from './categoryBox.styled'

//static icons
import nightDress from '../../assets/icons/dress.png'
import dress from '../../assets/icons/dress1.png'
import cropTop from '../../assets/icons/crop-top.png'
import skirt from '../../assets/icons/skirt.png'
import shoes from '../../assets/icons/shoes.png'
import accessories from '../../assets/icons/accessories.png'
import shirts from '../../assets/icons/shirts.png'

function CategoryBox() {
  return (
    <Block>
      <ul>
        <li>
          <img src={nightDress} alt="" />
          <b>საღამოს კაბა</b>
        </li>
      <li>
        <img src={dress} alt="" />
        <b>კაბა</b>
      </li>
      <li>
        <img src={cropTop} alt="" />
        <b>ქალის პერანგი</b>
      </li>
      <li>
        <img src={skirt} alt="" />
        <b>ქვედა ბოლო</b>
      </li>
      <li>
        <img src={shoes} alt="" />
        <b>ქალის ფეხსაცმელი</b>
      </li>
      <li>
        <img src={accessories} alt="" />
        <b>აქსესუარები</b>
      </li>
      <li>
        <img src={shirts} alt="" />
        <b>მამაკაცის ტანისამოსი</b>
      </li>
      </ul>
    </Block>
  )
}

export default CategoryBox
