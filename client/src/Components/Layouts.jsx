import React from 'react'
import CategoryBox from './Category/CategoryBox'
import { Area } from './layouts.styled'
import Popular from './Popular/Popular'

function Layouts() {
  return (
    <Area>
      <CategoryBox />
      <Popular />
    </Area>
  )
}

export default Layouts
