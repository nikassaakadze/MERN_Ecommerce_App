import React from 'react'
import axios from 'axios'
import { Button, Checkbox, Form, Input, message } from 'antd';
import Header from '../../Components/Header/Header';
import { LoginForm } from './login.styled';
import { Link } from 'react-router-dom';

function Login() {

  const onFinish = (values) => {
    axios({
      method: "post",
      data: {
        username: values.username,
        password: values.password
      },
      withCredentials: true,
      url: "/login"
    }).then(res => {
      message.warning(res.data)
    })
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const logOut = () => {
    axios.post('/profile').then(res => {
      console.log(res)
    })
  }


  return (
    <>
    {/* <Header /> */}
        <LoginForm>
          <Form
            className='login-form'
            name="basic"
            layout="vertical"
            initialValues={{ remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
          <Form.Item label="ელფოსტა"
            name="username"
            rules={[ { required: true, message: 'Please input your username!'}]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="პაროლი"
            name="password"
            rules={[ { required: true, message: 'Please input your password!'},]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16}}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16,}} >
            <Button type="primary" htmlType="submit"> ავტორიზაცია </Button>
          </Form.Item>
      </Form>
    <button onClick={logOut}>logOut</button>
      <Link to="/registration">
        <span>{"რეგისტრაცია ->"}</span>
      </Link>
    </LoginForm>
    </>
  )
}

export default Login
