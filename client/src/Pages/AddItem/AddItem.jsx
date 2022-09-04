import React, { useState } from 'react';
import { Wrapper } from './addItem.styled'
import Navigation from './Navigation'
import { Select } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import { Typography } from 'antd';
import * as ActionTypes from '../../Redux/Actions/uploadProduct'
import {useDispatch} from 'react-redux'

function AddItem() {

  const [image, setImage]  = useState(0)

  const { Title } = Typography;
  const dispatch = useDispatch()

  const { Option } = Select;
  const { TextArea } = Input;
  
  const handleChange = (value) => {
  };

  const onFinish = (values) => {
    if(image){
      dispatch(ActionTypes.uploadProduct(image, values))
    }
  };

  const onFinishFailed = (errorInfo) => {
  };

  const isImageSelect = (event) => {
    setImage(event.target.files[0])
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
                    <Option value="accessories  ">საღამოს კაბა</Option>
                    <Option value="evening_dress">კაბა</Option>
                    <Option value="just_dress">ქალის პერანგი</Option>
                    <Option value="men_clother">ქვედა ბოლო</Option>
                    <Option value="skirt">ქალის შარვალი</Option>
                    <Option value="womans_shirt">ქალის ფეხსაცმელი</Option>
                    <Option value="oreuli">ორეული</Option>
                    <Option value="womans_shoes">აქსესუარები</Option>
                  </Select>
                </Form.Item>
                <Form.Item 
                  name="title" 
                  label="აღწერა" 
                  rules={[{ required: true, message: 'აღწერის ველი ცარიელია',},]}>
                  <TextArea rows={4} placeholder="maxLength is 6" />
                </Form.Item>
            </fieldset>

            <fieldset className='img-up'>
              <div className="image-upload">
                {/* <CameraAltIcon /> */}
                <h5>ფოტოს ატვირთვა</h5>
                <h6>მაქსიმუმ 10 ფოტო</h6>
                <label className="imguploadinput" htmlFor="imageUpload" >სურათის არჩევა</label>
                <input id="imageUpload" type="file" hidden onChange={(e) => isImageSelect(e)} />
                <div className="image-list">
                  <div className="img-card">
                    <img src={image ? URL.createObjectURL(image) : "" } alt="" />
                  </div>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <Title level={5}>ფასი</Title>
              <Form.Item name="price" label="მიუთითეთ ფასი" rules={[{ required: true, message: 'გთხოვთ მიუთითოთ ფასი',},]}>
                <Input />
              </Form.Item>
              <Title level={5}>საკონტაქტო ინფორმაცია</Title>
              <Form.Item label="მიუთითეთ მდებარეობა" name="location">
                <Select defaultValue="1" style={{ width: '100%' }} onChange={handleChange}>
                  <Option value="1">თბილისი</Option>
                  <Option value="2">გორი</Option>
                  <Option value="3">ქუთაისი</Option>
                </Select>
              </Form.Item>
              <div className="name-number">
                <Form.Item rules={[{ required: true, message: 'მიუთითეთ სახელი',},]} label="სახელი" name="username ">
                  <Input />
                </Form.Item>
                <Form.Item rules={[{ required: true, message: 'მიუთითეთ მობილური',},]} label="ტელეფონის ნომერი" name="mobile_number">
                  <Input />
                </Form.Item>
              </div>
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
