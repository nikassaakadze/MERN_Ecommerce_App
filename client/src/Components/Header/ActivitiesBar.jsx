import React from 'react'
import { Activities } from './header.styled'
import CartIcon from '../../assets/icons/cart.png'
import FavorsIcon from '../../assets/icons/heart.png'
import Authorization from './Authorization'
import { Link } from 'react-router-dom'
import { Avatar } from 'antd';
import 'antd/dist/antd.css'
import {PlusCircleOutlined} from '@ant-design/icons'

function ActivitiesBar() {
  return (
      <Activities className='sctivities'>
        <Link to="/add">
          <div className='newItem-btn'>
          <PlusCircleOutlined style={{color: 'white'}} />
          <h6>დამატება</h6>
        </div>
        </Link>
      <span>
        <img src={CartIcon} alt="" />
      </span>
      <span className='favors'>
        <img src={FavorsIcon} alt="" />
      </span>
        <div className="room-block">
          <h5>ნიკა</h5>
          <h6 className='my-room'>ჩემი ოთახი</h6>
        </div>
        <Avatar shape="round" size={40} icon={""} />
    </Activities>
  )
}

export default ActivitiesBar
