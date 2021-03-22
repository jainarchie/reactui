import React, { Fragment } from 'react';
import './style/index.scss';


const prefixCls = 'viz-select';

const Select: React.FC<any> = props => {
    const {
        options,
        label,
        selected,
        onChange,
        disabled
    } = props;

    const handleOnChange = (e) => {
        if(onChange) {
            onChange(e.target.value);
        }
    }

    return (
        <Fragment>
            {label && <span>{label}</span>}
            <select disabled={disabled} className={`${prefixCls}-container`} onChange={handleOnChange}>
                {
                    options.map(optionInfo => (
                        <option selected={selected===optionInfo.value} value={optionInfo.value}>{optionInfo.label}</option>
                    ))
                }
            </select>
        </Fragment>
    )
}

export default Select;
