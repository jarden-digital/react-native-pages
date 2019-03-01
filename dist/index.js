"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const PagesComponent_1 = require("./src/PagesComponent");
class Pages extends React.PureComponent {
    render() {
        return (React.createElement(PagesComponent_1.default, { currentStatus: this.props.currentStatus, pages: this.props.pages, orderedStatuses: this.props.orderedStatuses, translateEnterDuration: this.props.translateEnterDuration, translateEnterFunction: this.props.translateEnterFunction, translateEnterPosition: this.props.translateEnterPosition, translateEndForwardPosition: this.props.translateEndForwardPosition, translateEndBackwardPosition: this.props.translateEndBackwardPosition, translateLeaveDuration: this.props.translateLeaveDuration, translateLeaveFunction: this.props.translateLeaveFunction, translateStartForwardPosition: this.props.translateStartForwardPosition, translateStartBackwardPosition: this.props.translateStartBackwardPosition }));
    }
}
exports.default = Pages;
