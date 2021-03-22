import React, { Fragment, useState } from 'react';
import classNames from 'classnames';
import Overlay from '../Overlay/Overlay';
import './style/index.scss';


const prefixCls = 'viz-modal';

const Modal: React.FC<any> = props => {
    const {
        open = false,
        showClose = true,
        showOverlay = true,
        onClose = () => {},
        children
    } = props;

    return (
        <Fragment>
            {
                open && 
                <Fragment>
                    {showOverlay && <Overlay />}
                    <div className={`${prefixCls}-container`}>
                        
                        <div className={`${prefixCls}-child`}>
                            {
                                showClose && (
                                <div onClick={onClose} className={`${prefixCls}-close`}>
                                    &times;
                                </div>)
                            }
                            <div>{children}</div>
                        </div>
                    </div>
                </Fragment>
            }
        </Fragment>
    )
}

export default Modal;
