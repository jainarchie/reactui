"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("../style/index");
var Tab = function (props) {
    var children = props.children;
    return react_1.default.createElement("div", { className: "tabs-content" }, children);
};
exports.default = Tab;
//# sourceMappingURL=Tab.js.map