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
require("./style");
var findHeader = function (vNode) {
    return vNode.props.children.find(
    // @ts-ignore
    function (child) { return child.props['data-type'] === 'header'; });
};
var Tabs = function (props) {
    var _a = react_1.useState(0), selected = _a[0], setSelected = _a[1];
    var children = props.children, _b = props.onChange, onChange = _b === void 0 ? function () { } : _b, className = props.className, _c = props.type, type = _c === void 0 ? 'horizontal' : _c;
    var TAB_TYPE = 'tab-type--';
    var classes = className + " " + (TAB_TYPE + type);
    var childArray = children;
    var clickHandler = function (i) {
        setSelected(i);
        onChange(i);
    };
    var getBody = function (c) {
        if (c.props.title) {
            return c;
        }
        return c.props.children.find(function (content) { return content.props['data-type'] === 'body'; });
    };
    return (react_1.default.createElement("div", { className: classes + " tabsWrapper" },
        react_1.default.createElement("ul", { className: "tabs" }, childArray.map(function (child, i) { return (react_1.default.createElement("li", { className: "tab-header " + (i === selected ? 'active' : '') + " " + child.props.className, onClick: function () { return clickHandler(i); }, role: "presentation" }, child.props && child.props.title ? (react_1.default.createElement("div", null,
            child.props.title,
            child.props.subTitle ? (react_1.default.createElement("div", { className: "subTitle" }, child.props.subTitle)) : null)) : (findHeader(child)))); })),
        childArray.map(function (child, i) {
            return i === selected ? getBody(child) : null;
        })));
};
exports.default = Tabs;
//# sourceMappingURL=Tabs.js.map