import React, { useState } from 'react';
import classNames from 'classnames';
import './style/index.scss';

const isIntegerChar = (eventKey: string | number): boolean =>  isFinite(+eventKey);

const INPUT_ALLOWED_KEYS: string[] = [
    'Backspace',
    'ArrowLeft',
    'ArrowRight',
    'ArrowUp',
    'ArrowDown',
    'Enter',
    'Tab',
    '.',
];

const prefixCls = 'viz-input';


const Input: React.FC<any> = props => {
    const {
        placeholder,
        disabled,
        value = '',
        errorMsg,
        disableCutCopyPaste,
        readOnly=false,
        digitsOnly=false,
        label,
        onChange,
        onInput = () => {},
        onKeyUp = () => {},
        onKeyDown = () => {},
        onKeyPress = () => {},
        onFocus = () => {},
        onPressEnter = () => {},
        onBlur = () => {},
        type = "text",
        className,
        appearance = "primary"
    } = props;

    const [inputValue, setInputValue] = useState<string>(value);
    const [focused, setFocused] = useState<boolean>(false);

    const onInputFocus = (_e:React.FocusEvent<HTMLInputElement>) => {
        setFocused(true);
        onFocus(inputValue);
    }

    const onInputBlur = (_e:React.FocusEvent<HTMLInputElement>) => {
        setFocused(false);
        onBlur(inputValue);
    }

    const onCutCopyPaste = (e:React.ClipboardEvent<HTMLInputElement>) => {
        if (disableCutCopyPaste) {
          e.preventDefault();
        }
    };

    const handleKeyPress = (e: any) => {

        if (digitsOnly) {
          if (!isIntegerChar(e.key) && INPUT_ALLOWED_KEYS.indexOf(e.key) < 0) {
            e.preventDefault();
          }
        }
        
        if (e.keyCode === 13 && onPressEnter) {
          onPressEnter(e.target.value);
        }

        setInputValue(e.target.value);

        if (onKeyDown) {
          onKeyDown(e.target.value);
        }

        onKeyUp(e.target.value);

    };

    const handleInput = (e: any) => {
      if (digitsOnly) {
        if (!isIntegerChar(e.key) && INPUT_ALLOWED_KEYS.indexOf(e.key) < 0) {
          e.preventDefault();
        }
      }
      setInputValue(e.target.value);
      if (onInput) {
        onInput(e.target.value);
      }
      
    };

    const handleChange = (e: any) => {
      if (digitsOnly) {
        if (!isIntegerChar(e.key) && INPUT_ALLOWED_KEYS.indexOf(e.key) < 0) {
          e.preventDefault();
        }
      }
      setInputValue(e.target.value);
      if (onChange) {
        onChange(e.target.value);
      }
      
    };




    const classString = classNames(className, {
        [`${prefixCls}__wrapper`]: true,
        [`${prefixCls}__wrapper--has-error`]: !!errorMsg,
        [`${prefixCls}__wrapper--focused`]: focused,
        [`${prefixCls}__wrapper--disabled`]: disabled,
        [`${prefixCls}__wrapper--primary`]: appearance === "primary",
        [`${prefixCls}__wrapper--secondary`]: appearance !== "primary",
    });

    const inputControlClassString = classNames({
        [`${prefixCls}__control`]: true,
        [`${prefixCls}__control--has-value`]: label && inputValue,
    });

    return (
        <div className={classString}>
            { label && <span>{label}</span>}
            <div className="viz-input__fieldwrapper">
              <input type={type} readOnly={readOnly} className={inputControlClassString} disabled={disabled} placeholder={placeholder} value={inputValue} onInput={handleInput} onChange={handleChange} onKeyUp={handleKeyPress} onKeyDown={handleKeyPress} onFocus={onInputFocus} onBlur={onInputBlur} onCopy={onCutCopyPaste} onPaste={onCutCopyPaste} onCut={onCutCopyPaste} />
            </div>
           
        </div>
    )
}

export default Input;