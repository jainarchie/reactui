import React from 'react';
import classnames from 'classnames';
import './style/index';

export interface IButtonProps {
  type?: 'primary' | 'secondary' | 'danger' | 'link' | 'primary-outline';
  htmlType?: 'button' | 'reset' | 'submit';
  size?: 'default' | 'small' | 'large';
  disabled?: boolean;
  onClick?: any;
  iconLeft?: any;
  iconRight?: any;
  loading?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  htmlType = 'button',
  type = 'primary',
  size = 'small',
  disabled,
  children,
  onClick,
  loading = false,
}) => {
  const classString = classnames('viz-button', {
    [`viz-button__${type}`]: !!type,
    [`viz-button__${size}`]: !!size || size !== 'default',
  });

  return (
    /* eslint-disable react/button-has-type */
    <button
      disabled={loading || disabled}
      className={classString}
      type={htmlType}
      onClick={onClick}
    >
      {loading && <span> Loading </span>}
      
      {!loading && children && <span>{children}</span>}
    </button>
  );
};

export default Button;
