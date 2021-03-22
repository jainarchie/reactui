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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
require("./style/index.scss");
var prefixCls = 'viz-select';
var Select = function (props) {
    var options = props.options, label = props.label, selected = props.selected, onChange = props.onChange, disabled = props.disabled;
    var handleOnChange = function (e) {
        if (onChange) {
            onChange(e.target.value);
        }
    };
    return (react_1.default.createElement(react_1.Fragment, null,
        label && react_1.default.createElement("span", null, label),
        react_1.default.createElement("select", { disabled: disabled, className: prefixCls + "-container", onChange: handleOnChange }, options.map(function (optionInfo) { return (react_1.default.createElement("option", { selected: selected === optionInfo.value, value: optionInfo.value }, optionInfo.label)); }))));
};
exports.default = Select;
//# sourceMappingURL=Select.js.map