/// <reference types="react" />
import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
export declare type IProps = {
    associatedStatus: string;
    component: JSX.Element;
    currentStatus: string;
    isGoingForward: boolean;
    stylePage: StyleProp<ViewStyle>;
    translateEnterDuration?: number;
    translateEnterFunction?: (normalizedTime: number) => number;
    translateEnterPosition?: number;
    translateEndForwardPosition?: number;
    translateEndBackwardPosition?: number;
    translateLeaveDuration?: number;
    translateLeaveFunction?: (normalizedTime: number) => number;
    translateStartForwardPosition?: number;
    translateStartBackwardPosition?: number;
};
declare class PageComponent extends React.PureComponent<IProps, {}> {
    private translateEnterDurationDefault;
    private translateEnterFunctionDefault;
    private translateEnterPositionDefault;
    private translateEndForwardPositionDefault;
    private translateEndBackwardPositionDefault;
    private translateLeaveDurationDefault;
    private translateLeaveFunctionDefault;
    private translateStartForwardPositionDefault;
    private translateStartBackwardPositionDefault;
    render(): JSX.Element;
}
export default PageComponent;
