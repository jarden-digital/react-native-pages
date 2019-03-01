"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const d3_ease_1 = require("d3-ease");
const React = require("react");
const react_move_1 = require("react-move");
const react_native_1 = require("react-native");
const dim = react_native_1.Dimensions.get('window');
class PageComponent extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.translateEnterDurationDefault = 400;
        this.translateEnterFunctionDefault = d3_ease_1.easeQuadInOut;
        this.translateEnterPositionDefault = 0;
        this.translateEndForwardPositionDefault = -dim.width;
        this.translateEndBackwardPositionDefault = dim.width;
        this.translateLeaveDurationDefault = 400;
        this.translateLeaveFunctionDefault = d3_ease_1.easeQuadInOut;
        this.translateStartForwardPositionDefault = dim.width;
        this.translateStartBackwardPositionDefault = -dim.width;
    }
    render() {
        const stylePage = this.props.stylePage || styles.page;
        const transEndDur = this.props.translateEnterDuration || this.translateEnterDurationDefault;
        const transEndFunc = this.props.translateEnterFunction || this.translateEnterFunctionDefault;
        const transEndPos = this.props.translateEnterPosition || this.translateEnterPositionDefault;
        const transEndForPos = this.props.translateEndForwardPosition || this.translateEndForwardPositionDefault;
        const transEndBacPos = this.props.translateEndBackwardPosition || this.translateEndBackwardPositionDefault;
        const transLeaveDur = this.props.translateLeaveDuration || this.translateLeaveDurationDefault;
        const transLeaveFunc = this.props.translateLeaveFunction || this.translateLeaveFunctionDefault;
        const transStartForPos = this.props.translateStartForwardPosition || this.translateStartForwardPositionDefault;
        const transStartBacPos = this.props.translateStartBackwardPosition || this.translateStartBackwardPositionDefault;
        return (React.createElement(react_move_1.Animate, { show: this.props.associatedStatus === this.props.currentStatus, start: { translate: this.props.isGoingForward ? transStartForPos : transStartBacPos }, enter: { translate: [transEndPos], timing: { duration: transEndDur, ease: transEndFunc } }, leave: { translate: [this.props.isGoingForward ? transEndForPos : transEndBacPos],
                timing: { duration: transLeaveDur, ease: transLeaveFunc } } }, ({ translate }) => (React.createElement(react_native_1.View, { style: [stylePage, { transform: [{ translateX: translate }] }] }, this.props.component))));
    }
}
exports.default = PageComponent;
const styles = react_native_1.StyleSheet.create({
    page: {
        flex: 1,
        position: 'absolute',
        top: 0,
        height: '100%',
        width: '100%',
        alignItems: 'flex-start'
    }
});
