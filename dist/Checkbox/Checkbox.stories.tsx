import React from 'react';
import Checkbox from './Checkbox';

export default { 
  title: 'Checkbox',
  argTypes: {
    disabled: {
      control :{
        type: 'boolean'
      }
    },
    checked: {
      control :{
        type: 'boolean'
      }
    },
    onChange: {
      action: 'Checkbox onChange'
    }
  }
};

export const checkbox = (rest) => (
  <Checkbox
    {...rest} 
  />
);

checkbox.args = {
  id:"qwerty",
  name:"checkBox1",
  value:"Check Box",
  disabled: false,
  checked: true
}
