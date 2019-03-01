/// <reference types="react" />
import * as React from 'react';
import { Page } from './src/PagesComponent';
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
declare class Pages extends React.PureComponent<IProps, {}> {
    render(): JSX.Element;
}
export default Pages;
