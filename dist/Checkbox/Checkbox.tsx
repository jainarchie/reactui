import React, { Fragment, useState } from 'react';
import classNames from 'classnames';
import './style/index.scss';


const prefixCls = 'viz-checkbox';

const Checkbox: React.FC<any> = props => {
    const {
        onChange,
        onFocus = () => {},
        onBlur = () => {},
        disabled = false,
        readOnly=false,
        value,
        checked = false,
        name,
        required = false
    } = props;

    const [isChecked, setChecked] = useState<boolean>(checked);

    const classString = classNames(prefixCls, {
        [`${prefixCls}-checked`]: isChecked,
        [`${prefixCls}-disabled`]: disabled,
    });

    const handleChange = (e:any) => {
        setChecked(prevVal => {
            if(onChange) {
                onChange(!prevVal);
            }
            return !prevVal;
        });
    }

    return (
        <Fragment>
            <label
                className={`${prefixCls}-wrapper`}
            >
            <span className={classString}>
                <input
                    name={name}
                    type="checkbox"
                    required={required}
                    readOnly={readOnly}
                    disabled={disabled}
                    tabIndex={0}
                    className={`${prefixCls}-input`}
                    checked={!!checked}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    value={value}
                    onChange={handleChange}
                />
            <span className={`${prefixCls}-inner`} />
          </span>
          {value && <span>{value}</span>}
        </label>
        </Fragment>
    )
}

export default Checkbox;
