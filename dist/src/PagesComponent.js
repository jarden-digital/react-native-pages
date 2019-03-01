"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PageComponent_1 = require("./PageComponent");
const React = require("react");
class PagesComponent extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.isGoingForward = () => {
            return this.props.orderedStatuses.indexOf(this.props.currentStatus) >=
                this.props.orderedStatuses.indexOf(this._previousStatus);
        };
    }
    componentDidMount() {
        this._previousStatus = this.props.orderedStatuses[0];
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this._previousStatus !== this.props.currentStatus) {
            this._previousStatus = prevProps.currentStatus;
        }
    }
    render() {
        return (this.props.pages.map((p, i) => {
            return React.createElement(PageComponent_1.default, { key: i + p.associatedStatus, associatedStatus: p.associatedStatus, component: p.component, currentStatus: this.props.currentStatus, isGoingForward: this.isGoingForward(), stylePage: p.style, translateEnterDuration: this.props.translateEnterDuration, translateEnterFunction: this.props.translateEnterFunction, translateEnterPosition: this.props.translateEnterPosition, translateEndForwardPosition: this.props.translateEndForwardPosition, translateEndBackwardPosition: this.props.translateEndBackwardPosition, translateLeaveDuration: this.props.translateLeaveDuration, translateLeaveFunction: this.props.translateLeaveFunction, translateStartForwardPosition: this.props.translateStartForwardPosition, translateStartBackwardPosition: this.props.translateStartBackwardPosition });
        }));
    }
}
exports.default = PagesComponent;
