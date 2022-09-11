import React from 'react'
import { Activities } from './header.styled'
import CartIcon from '../../assets/icons/cart.png'
import FavorsIcon from '../../assets/icons/heart.png'
import { Avatar } from 'antd';
import 'antd/dist/antd.css'
import {ShoppingCartOutlined} from '@ant-design/icons'
import {HeartOutlined} from '@ant-design/icons'

function Cart() {
  return (
      <Activities className='sctivities'>
        <span>
          <ShoppingCartOutlined />
        </span>
        <span className='favors'>
          <HeartOutlined />
        </span>
    </Activities>
  )
}

export default Cart
