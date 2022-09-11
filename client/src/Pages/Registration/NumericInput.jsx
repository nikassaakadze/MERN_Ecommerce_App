import { Input } from 'antd';
import React from 'react';
import {PhoneOutlined} from '@ant-design/icons'

const NumericInput = (props) => {
  const { value, onChange } = props;

  const handleChange = (e) => {
    const { value: inputValue } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;

    if (reg.test(inputValue) || inputValue === '' || inputValue === '-') {
      onChange(inputValue);
    }
  }; 

  const handleBlur = () => {
    let valueTemp = value;

    if (value.charAt(value.length - 1) === '.' || value === '-') {
      valueTemp = value.slice(0, -1);
    }

    onChange(valueTemp.replace(/0*(\d+)/, '$1'));
  };
  return (
      <Input
        {...props}
        addonBefore={[<PhoneOutlined />, " (+995)"]}
        onChange={handleChange}
        onBlur={handleBlur}
        maxLength={9}
        placeholder="მობილურის ნომერი"
      />
  );
};

export default NumericInput