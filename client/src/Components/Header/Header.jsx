  import React from 'react'
  import { HeaderWrapper, Layout, LogoArea } from './header.styled'
  import SearchBox from './Search'
  import AddNewItem from './AddItem'
  import CartIcon from '../../assets/icons/cart.png'
  import FavorsIcon from '../../assets/icons/heart.png'
  import Cart from './Cart'
  import Register from './Register'
  import {Link} from 'react-router-dom'
  import {Avatar} from 'antd'
  import {PlusCircleOutlined} from '@ant-design/icons'
  import axios from 'axios'
  import { Typography } from 'antd';

  function Header() {

    const [user, setUser] = React.useState(0)

    const { Title } = Typography;

    React.useEffect(() => {
      axios.get('/user').then(res => {
        if(res.data !== ""){
          setUser(res)
        }
      })
    }, [])

    return (
      <Layout>
        <HeaderWrapper className={user ? "header-wrapper-authenticated " : "header-wrapper"}>
        {
          ! user ? 
            <>
              <LogoArea className='logo'>
                <img src="https://images.squarespace-cdn.com/content/v1/5c37b3c4365f02dfd890f0f7/1548791062674-0X4B9O2XJJP6Y1X2VY7O/Wattpad_Horizontal_Logo_Orange_RGB_HR_nobleed.png?format=1000w" alt="" />
              </LogoArea>
              <SearchBox />
              <Cart />
              <Register />
            </>
          :
            <>
            <LogoArea className='logo'>
              <img src="https://images.squarespace-cdn.com/content/v1/5c37b3c4365f02dfd890f0f7/1548791062674-0X4B9O2XJJP6Y1X2VY7O/Wattpad_Horizontal_Logo_Orange_RGB_HR_nobleed.png?format=1000w" alt="" />
            </LogoArea>
              <SearchBox />
            <Link to="/add">
              <div className='newItem-btn'>
                <PlusCircleOutlined style={{color: 'white'}} />
                <h6>დამატება</h6>
              </div>
            </Link>
            <Cart />
            <div className='user'>
              <div className="room-block">
                <Title level={5}>{user?.data.userName}</Title>
                <Title style={{color: "#3498DB"}} level={5}>ჩემი ოთახი</Title>
              </div>
              <Avatar src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/02/08/16443350950323.jpg" shape="round" size={40} icon={""} />
            </div>
          </>  
        }
        </HeaderWrapper>
      </Layout>
    )
  }

  export default Header
