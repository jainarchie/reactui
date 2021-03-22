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
var prefixCls = 'viz-checkbox';
var Checkbox = function (props) {
    var _a;
    var onChange = props.onChange, _b = props.onFocus, onFocus = _b === void 0 ? function () { } : _b, _c = props.onBlur, onBlur = _c === void 0 ? function () { } : _c, _d = props.disabled, disabled = _d === void 0 ? false : _d, _f = props.readOnly, readOnly = _f === void 0 ? false : _f, value = props.value, _g = props.checked, checked = _g === void 0 ? false : _g, name = props.name, _h = props.required, required = _h === void 0 ? false : _h;
    var _j = react_1.useState(checked), isChecked = _j[0], setChecked = _j[1];
    var classString = classnames_1.default(prefixCls, (_a = {},
        _a[prefixCls + "-checked"] = isChecked,
        _a[prefixCls + "-disabled"] = disabled,
        _a));
    var handleChange = function (_e) {
        setChecked(function (prevVal) {
            if (onChange) {
                onChange(!prevVal);
            }
            return !prevVal;
        });
    };
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement("label", { className: prefixCls + "-wrapper" },
            react_1.default.createElement("span", { className: classString },
                react_1.default.createElement("input", { name: name, type: "checkbox", required: required, readOnly: readOnly, disabled: disabled, tabIndex: 0, className: prefixCls + "-input", checked: !!checked, onFocus: onFocus, onBlur: onBlur, value: value, onChange: handleChange }),
                react_1.default.createElement("span", { className: prefixCls + "-inner" })),
            value && react_1.default.createElement("span", null, value))));
};
exports.default = Checkbox;
//# sourceMappingURL=Checkbox.js.map