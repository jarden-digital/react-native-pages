/// <reference types="react" />
import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
export declare type IProps = {
    currentStatus: string;
    pages: Page[];
    orderedStatuses: any[];
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
export declare type Page = {
    associatedStatus: string;
    component: JSX.Element;
    style?: StyleProp<ViewStyle>;
};
declare class PagesComponent extends React.PureComponent<IProps, {}> {
    private _previousStatus;
    componentDidMount(): void;
    componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<{}>, snapshot?: any): void;
    render(): any;
    private isGoingForward;
}
export default PagesComponent;
