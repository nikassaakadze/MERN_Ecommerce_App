import React, { useState } from 'react';
import { Wrapper } from './addItem.styled'
import Navigation from './Navigation'
import { InputNumber, Select } from 'antd';
import { Button, Checkbox, Form, Input, message  } from 'antd';
import { Typography } from 'antd';
import * as ActionTypes from '../../Redux/Actions/uploadProduct'
import {useDispatch} from 'react-redux'
import {CameraOutlined} from '@ant-design/icons'

function AddItem() {

  const [image, setImage]  = useState([])

  const info = () => {
    message.info('10 სურათზე მეტის ატვირთვა შეზღუდულია');
  };

  const { Title } = Typography;
  const dispatch = useDispatch()

  const { Option } = Select;
  const { TextArea } = Input;
  
  const handleChange = (value) => {
  };

  const onFinish = (values) => {

    console.log(values)
    if(image){
      dispatch(ActionTypes.uploadProduct(image, values))
    }
  };

  const onFinishFailed = (errorInfo) => {
  };

  const isImageSelect = (event) => {
    if(image.length <= 9){
      setImage([...image, event.target.files])
    }else{
      info()
    }
  }

  return (
      <Wrapper>
        <Navigation />

        <div className="new-item-fields">

          <Form 
            layout="vertical" 
            name="product_upload_form" 
            initialValues={{ remember: true}} 
            onFinish={onFinish} 
            onFinishFailed={onFinishFailed} 
            autoComplete="off"
          >

            <fieldset>
              <Title level={5}>შეავსეთ დეტალები</Title> 

                <Form.Item 
                  label="სათაური" 
                  name="headline" 
                  rules={[{ required: true, message: 'სათაურის ველი ცარიელია',},]}>
                  <Input className='form-itm' />
                </Form.Item>

                <Form.Item 
                  label="კატეგორია" 
                  name="category"
                  rules={[{ required: true, message: 'გთხოვთ მიუთითოთ კატეგორია',},]}>
                  <Select style={{ width: '100%' }} onChange={handleChange}>
                    <Option value="საღამოს კაბა">საღამოს კაბა</Option>
                    <Option value="კაბა">კაბა</Option>
                    <Option value="ქალის პერანგი">ქალის პერანგი</Option>
                    <Option value="ქვედა ბოლო">ქვედა ბოლო</Option>
                    <Option value="ქალის შარვალი">ქალის შარვალი</Option>
                    <Option value="ქალის ფეხსაცმელი">ქალის ფეხსაცმელი</Option>
                    <Option value="ორეული">ორეული</Option>
                    <Option value="აქსესუარები">აქსესუარები</Option>
                  </Select>
                </Form.Item>

                <Form.Item 
                  name="title" 
                  label="აღწერა" 
                  rules={[{ required: true, message: 'აღწერის ველი ცარიელია',},]}>
                  <TextArea rows={4} placeholder="პროდუქტის აღწერა" />
                </Form.Item>
            </fieldset>

            <fieldset className='img-up'>
              <div className="image-upload">
                <label className="imguploadinput" htmlFor="imageUpload" >
                <CameraOutlined htmlFor="imageUpload" />
                  <h5>ფოტოს ატვირთვა</h5>
                  <h6>მაქსიმუმ 10 ფოტო</h6>
                </label>
                <input id="imageUpload" type="file" hidden onChange={(e) => isImageSelect(e)} />
                <div className="image-list">  
                {
                  ! image.length == 0 ? image.map(imageItem => (
                    <div className="img-card">
                      <img src={URL.createObjectURL(imageItem[0])} alt="" />
                    </div>
                  )) : <></>
                }
                </div>
              </div>
            </fieldset>

            <fieldset>
              <Title level={5}>ფასი</Title>
              <Form.Item name="price" label="მიუთითეთ ფასი" rules={[{ required: true, message: 'გთხოვთ მიუთითოთ ფასი',},]}>
                <InputNumber className='price_input' prefix="₾" style={{ width: '100%' }} />
              </Form.Item>
              <Title level={5}>საკონტაქტო ინფორმაცია</Title>
              <Form.Item label="მიუთითეთ მდებარეობა" name="location" rules={[{ required: true, message: 'გთხოვთ მიუთითოთ მდებარეობა',},]}>
                <Select style={{ width: '100%' }} onChange={handleChange}>
                  <Option value="თბილისი">თბილისი</Option>
                  <Option value="გორი">გორი</Option>
                  <Option value="ქუთაისი">ქუთაისი</Option>
                </Select>
              </Form.Item>
            </fieldset>

            <Button className='item-add-btn' type="primary" htmlType="submit">
            დამატება
            </Button>

        </Form>
      </div>
    </Wrapper>
  )
}

export default AddItem
