import React from 'react';
import Modal from './Modal';

export default { 
  title: 'Modal',
  argTypes: {
    onChange: {
      action: 'Select onChange'
    }
  }
};

export const modal = (rest) => (
  <Modal {...rest}>
    Hello World<br />
    <button>HTML Element</button>
  </Modal> 
);

modal.args = {
  open: true,
  showClose: true,
  showOverlay: true,
  onClocse: () => {}
}
