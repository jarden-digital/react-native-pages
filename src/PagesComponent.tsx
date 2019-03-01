import PageComponent from './PageComponent'

import * as React from 'react'
import {StyleProp, ViewStyle} from 'react-native'

export type IProps = {
  currentStatus: string
  pages: Page[]
  orderedStatuses: any[]
  translateEnterDuration?: number
  translateEnterFunction?: (normalizedTime: number) => number
  translateEnterPosition?: number
  translateEndForwardPosition?: number
  translateEndBackwardPosition?: number
  translateLeaveDuration?: number
  translateLeaveFunction?: (normalizedTime: number) => number
  translateStartForwardPosition?: number
  translateStartBackwardPosition?: number
}

export type Page = {
  associatedStatus: string
  component: JSX.Element
  style?: StyleProp<ViewStyle>
}

class PagesComponent extends React.PureComponent<IProps, {}> {

  private _previousStatus: any

  public componentDidMount(): void {
    this._previousStatus = this.props.orderedStatuses[0]
  }

  public componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<{}>, snapshot?: any): void {
    if (this._previousStatus !== this.props.currentStatus) {
      this._previousStatus = prevProps.currentStatus
    }
  }

  public render() {
    return (
      this.props.pages.map((p: Page, i: number) => {
        return <PageComponent
          key={i + p.associatedStatus}
          associatedStatus={p.associatedStatus}
          component={p.component}
          currentStatus={this.props.currentStatus}
          isGoingForward={this.isGoingForward()}
          stylePage={p.style}
          translateEnterDuration={this.props.translateEnterDuration}
          translateEnterFunction={this.props.translateEnterFunction}
          translateEnterPosition={this.props.translateEnterPosition}
          translateEndForwardPosition={this.props.translateEndForwardPosition}
          translateEndBackwardPosition={this.props.translateEndBackwardPosition}
          translateLeaveDuration={this.props.translateLeaveDuration}
          translateLeaveFunction={this.props.translateLeaveFunction}
          translateStartForwardPosition={this.props.translateStartForwardPosition}
          translateStartBackwardPosition={this.props.translateStartBackwardPosition}
        />
      })
    )
  }

  private isGoingForward = (): boolean => {
    return this.props.orderedStatuses.indexOf(this.props.currentStatus) >=
      this.props.orderedStatuses.indexOf(this._previousStatus)
  }
}

export default PagesComponent
