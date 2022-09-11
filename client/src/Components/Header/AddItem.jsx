import React from 'react'
import { NewItemBlock } from './header.styled'
import { Link } from 'react-router-dom'
import {PlusCircleOutlined} from '@ant-design/icons'

function AddNewItem() {
  return (
    <NewItemBlock>
      <Link to="/add">
        <div className='newItem-btn'>
          <PlusCircleOutlined style={{color: 'white'}} />
          <h6>დამატება</h6>
        </div>
      </Link>
    </NewItemBlock>
  )
}

export default AddNewItem
