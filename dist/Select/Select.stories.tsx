import React from 'react';
import Select from './Select';

export default { 
  title: 'Select',
  argTypes: {
    onChange: {
      action: 'Select onChange'
    }
  }
};

export const select = (rest) => (
  <Select
    options={[{
      value: 'option1',
      label: 'Option 1'
    }, {
      value: 'option2',
      label: 'Option 2'
    }, {
      value: 'option3',
      label: 'Option 3'
    }, {
      value: 'option4',
      label: 'Option 4'
    }]}
    {...rest} 
  />
);

select.args = {
  label:"Select Dropdown",
  selected:"option2",
  disabled: false,
}
