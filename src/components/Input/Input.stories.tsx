import React from 'react';
import Input from './Input';


export default { 
  title: 'Input',
  argTypes: {
    appearance: {
      control: {
        type: 'select',
        options: [
          'primary', 
          'secondary',
        ],
      }
    },
    digitsOnly: {
      control :{
        type: 'boolean'
      }
    },
    label: {
      control: {
        type: 'text'
      }
    },
    placeholder: {
      control: {
        type: 'text'
      }
    },
    readOnly: {
      control :{
        type: 'boolean'
      }
    },
    disabled: {
      control :{
        type: 'boolean'
      }
    },
    onInput: {
      action: 'onInput'
    },
    onKeyUp: {
      action: 'onKeyUp'
    },
    onKeyDown: {
      action: 'onKeyDown'
    },
    onFocus: {
      action: 'onFocus'
    },
    onPressEnter: {
      action: 'onPressEnter'
    },
    onBlur: {
      action: 'onBlur'
    }
  },
};

export const input = ({...rest}) => (
  <Input
    placeholder="Enter Value"
    {...rest}
  />
);

input.args = {
  appearance: 'secondary',
  digitsOnly: false,
  label: 'Input Label',
  placeholder: 'Placeholder',
  readOnly: false,
  disabled: false
}