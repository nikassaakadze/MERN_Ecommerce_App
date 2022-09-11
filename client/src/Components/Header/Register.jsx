import React from 'react'
import { Button } from 'antd';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <Link to="/login">
      <Button className='auth-btn'>ავტორიზაცია</Button>
    </Link>
  )
}

export default Register
