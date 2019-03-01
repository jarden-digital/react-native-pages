import * as React from 'react'
import PagesComponent, {Page} from './src/PagesComponent'

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

class Pages extends React.PureComponent<IProps, {}> {

  render() {
    return (
      <PagesComponent
        currentStatus={this.props.currentStatus}
        pages={this.props.pages}
        orderedStatuses={this.props.orderedStatuses}
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
    )
  }
}

export default Pages
