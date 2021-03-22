"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
require("./style/index");
var Button = function (_a) {
    var _b;
    var _c = _a.htmlType, htmlType = _c === void 0 ? 'button' : _c, _d = _a.type, type = _d === void 0 ? 'primary' : _d, _e = _a.size, size = _e === void 0 ? 'small' : _e, disabled = _a.disabled, children = _a.children, onClick = _a.onClick, _f = _a.loading, loading = _f === void 0 ? false : _f;
    var classString = classnames_1.default('viz-button', (_b = {},
        _b["viz-button__" + type] = !!type,
        _b["viz-button__" + size] = !!size || size !== 'default',
        _b));
    return (
    /* eslint-disable react/button-has-type */
    react_1.default.createElement("button", { disabled: loading || disabled, className: classString, type: htmlType, onClick: onClick },
        loading && react_1.default.createElement("span", null, " Loading "),
        !loading && children && react_1.default.createElement("span", null, children)));
};
exports.default = Button;
//# sourceMappingURL=Button.js.map