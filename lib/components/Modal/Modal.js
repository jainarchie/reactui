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
var Overlay_1 = __importDefault(require("../Overlay/Overlay"));
require("./style/index.scss");
var prefixCls = 'viz-modal';
var Modal = function (props) {
    var _a = props.open, open = _a === void 0 ? false : _a, _b = props.showClose, showClose = _b === void 0 ? true : _b, _c = props.showOverlay, showOverlay = _c === void 0 ? true : _c, _d = props.onClose, onClose = _d === void 0 ? function () { } : _d, children = props.children;
    return (react_1.default.createElement(react_1.Fragment, null, open &&
        react_1.default.createElement(react_1.Fragment, null,
            showOverlay && react_1.default.createElement(Overlay_1.default, null),
            react_1.default.createElement("div", { className: prefixCls + "-container" },
                react_1.default.createElement("div", { className: prefixCls + "-child" },
                    showClose && (react_1.default.createElement("div", { onClick: onClose, className: prefixCls + "-close" }, "\u00D7")),
                    react_1.default.createElement("div", null, children))))));
};
exports.default = Modal;
//# sourceMappingURL=Modal.js.map