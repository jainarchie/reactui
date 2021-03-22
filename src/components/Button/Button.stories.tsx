import React from 'react';
import { boolean, radios, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from './Button';

export default { 
  title: 'Button', 
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: [
          'primary', 
          'secondary',
          'danger',
          'link',
          'primary-outline'
        ],
      }
    },
    size: {
      control: {
        type: 'select',
        options: [
          'default', 
          'small', 
          'large'
        ],
      }
    },
    loading: {
      control :{
        type: 'boolean'
      }
    },
    disabled: {
      control :{
        type: 'boolean'
      }
    },
    label: {
      control: {
        type: 'text'
      }
    },
    onClick: {
      action: 'Button Clicked'
    }
  } 
};

export const button = ({label, ...rest}) => (
  <Button
    {...rest}
  >
    {label}
  </Button>
);

button.args = {
  label: "Sample button text",
  disabled: false,
  loading: false,
  type: 'primary',
  size: 'default'
}