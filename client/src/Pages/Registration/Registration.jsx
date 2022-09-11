import React, { useState } from 'react';
import { Wrapper } from './registration.styled'
import { Button, Checkbox, Form, Input, message, Spin  } from 'antd';
import Header from '../../Components/Header/Header';
import { Link, useNavigate } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux'
import * as actionTypes from '../../Redux/Actions/userActions'
import NumericInput from './NumericInput';
import {UserOutlined, KeyOutlined, MessageOutlined  } from '@ant-design/icons'
import axios from 'axios';

function Registration() {

  const [value, setValue] = useState('');
  const navigate = useNavigate();
  const registerUser = useSelector(state => state.registerUser)
  const dispatch = useDispatch()

  const { user, loading, error } = registerUser
  
  const onFinish = (values) => {
    if(values.username.length < 2){
      message.warning('სახელი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან')
    }else if(values.password !== values.pass_repeat){
      message.error('პაროლი არ ემთხვევა')
    }else if(!values.rules == true){
      message.warning('გთხოვთ გაეცანით წესებს და დაადასტურეთ')
    }else{
      dispatch(actionTypes.userRegistration(values))
    }
  };

  React.useEffect(() => {
    if(loading != undefined && !loading){
      message.warning(user.data)
    }
  }, [loading])

  return (
    <>
      {/* <Header /> */}
        <Wrapper>
          <div className="register-form-wrapper">
            <Link to="/">
              <img className='logo-img' src="https://www.synointcdn.com/wp-content/uploads/2019/04/Amazon-Logo-PNG.png" alt="" />
            </Link>
            <h3 className='headine'>რეგისტრაცია</h3>
            <Form
              className='register-form'
              name="basic"
              layout="vertical"
              initialValues={{ remember: true}}
              onFinish={onFinish}
              autoComplete="off"
            >
            <Form.Item name="username" rules={[ { required: true, message: 'სახელის ველი ცარიელია'}]}>
              <Input addonBefore={<UserOutlined />}  placeholder="მომხმარებლის სახელი" />
            </Form.Item>

            <Form.Item name="password" rules={[{required: true, message: 'პაროლის ველი ცარიელია'}]}>
              <Input.Password addonBefore={<KeyOutlined />} placeholder="პაროლი" />
            </Form.Item>

            <Form.Item name="pass_repeat">
              <Input.Password addonBefore={<KeyOutlined />}  placeholder="გაიმეორეთ პაროლი" />
            </Form.Item>

            <Form.Item name="mobile_number" rules={[{ required: true, message: 'შეიყვანეთ მობილურის ნომერი',}]}>
              <NumericInput value={value} onChange={setValue} />
            </Form.Item>

            <Form.Item name="sms_code" rules={[ { required: false,  message: ''},]}>
              <Input addonBefore={<MessageOutlined />} placeholder="სმს კოდი" />
            </Form.Item>

            <Form.Item className='chkbx' name="rules" valuePropName="checked">
              <Checkbox>ვეთანხმები</Checkbox> 
            </Form.Item>

            <Form.Item >
              { loading  ? <Spin /> : <Button className='register-btn' htmlType="submit"> რეგისტრაცია </Button>}
            </Form.Item>
            <div className="already-rg">
              <span>უკვე ხართ დარეგისტრირებული ? <Link to="/login"> ავტორიზაცია </Link></span>
            </div>
          </Form>
          </div>
      </Wrapper>
    </>
  )
}

export default Registration
