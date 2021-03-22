import React from 'react';
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
declare const Button: React.FC<IButtonProps>;
export default Button;
//# sourceMappingURL=Button.d.ts.map