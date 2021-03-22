"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
require("./style/index.scss");
var isIntegerChar = function (eventKey) { return isFinite(+eventKey); };
var INPUT_ALLOWED_KEYS = [
    'Backspace',
    'ArrowLeft',
    'ArrowRight',
    'ArrowUp',
    'ArrowDown',
    'Enter',
    'Tab',
    '.',
];
var prefixCls = 'viz-input';
var Input = function (props) {
    var _a, _b;
    var placeholder = props.placeholder, disabled = props.disabled, _c = props.value, value = _c === void 0 ? '' : _c, errorMsg = props.errorMsg, disableCutCopyPaste = props.disableCutCopyPaste, _d = props.readOnly, readOnly = _d === void 0 ? false : _d, _f = props.digitsOnly, digitsOnly = _f === void 0 ? false : _f, label = props.label, onChange = props.onChange, _g = props.onInput, onInput = _g === void 0 ? function () { } : _g, _h = props.onKeyUp, onKeyUp = _h === void 0 ? function () { } : _h, _j = props.onKeyDown, onKeyDown = _j === void 0 ? function () { } : _j, _k = props.onFocus, onFocus = _k === void 0 ? function () { } : _k, _l = props.onPressEnter, onPressEnter = _l === void 0 ? function () { } : _l, _m = props.onBlur, onBlur = _m === void 0 ? function () { } : _m, _o = props.type, type = _o === void 0 ? "text" : _o, className = props.className, _p = props.appearance, appearance = _p === void 0 ? "primary" : _p;
    var _q = react_1.useState(value), inputValue = _q[0], setInputValue = _q[1];
    var _r = react_1.useState(false), focused = _r[0], setFocused = _r[1];
    var onInputFocus = function (_e) {
        setFocused(true);
        onFocus(inputValue);
    };
    var onInputBlur = function (_e) {
        setFocused(false);
        onBlur(inputValue);
    };
    var onCutCopyPaste = function (e) {
        if (disableCutCopyPaste) {
            e.preventDefault();
        }
    };
    var handleKeyPress = function (e) {
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
    var handleInput = function (e) {
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
    var handleChange = function (e) {
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
    var classString = classnames_1.default(className, (_a = {},
        _a[prefixCls + "__wrapper"] = true,
        _a[prefixCls + "__wrapper--has-error"] = !!errorMsg,
        _a[prefixCls + "__wrapper--focused"] = focused,
        _a[prefixCls + "__wrapper--disabled"] = disabled,
        _a[prefixCls + "__wrapper--primary"] = appearance === "primary",
        _a[prefixCls + "__wrapper--secondary"] = appearance !== "primary",
        _a));
    var inputControlClassString = classnames_1.default((_b = {},
        _b[prefixCls + "__control"] = true,
        _b[prefixCls + "__control--has-value"] = label && inputValue,
        _b));
    return (react_1.default.createElement("div", { className: classString },
        label && react_1.default.createElement("span", null, label),
        react_1.default.createElement("div", { className: "viz-input__fieldwrapper" },
            react_1.default.createElement("input", { type: type, readOnly: readOnly, className: inputControlClassString, disabled: disabled, placeholder: placeholder, value: inputValue, onInput: handleInput, onChange: handleChange, onKeyUp: handleKeyPress, onKeyDown: handleKeyPress, onFocus: onInputFocus, onBlur: onInputBlur, onCopy: onCutCopyPaste, onPaste: onCutCopyPaste, onCut: onCutCopyPaste }))));
};
exports.default = Input;
//# sourceMappingURL=Input.js.map