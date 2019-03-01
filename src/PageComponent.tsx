import {easeQuadInOut} from 'd3-ease'
import * as React from 'react'
import {Animate} from 'react-move'
import {Dimensions, StyleProp, StyleSheet, View, ViewStyle} from 'react-native'

export type IProps = {
  associatedStatus: string
  component: JSX.Element
  currentStatus: string
  isGoingForward: boolean
  stylePage: StyleProp<ViewStyle>
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

const dim = Dimensions.get('window')

class PageComponent extends React.PureComponent<IProps, {}> {

  private translateEnterDurationDefault = 400
  private translateEnterFunctionDefault = easeQuadInOut
  private translateEnterPositionDefault = 0
  private translateEndForwardPositionDefault = -dim.width
  private translateEndBackwardPositionDefault = dim.width
  private translateLeaveDurationDefault = 400
  private translateLeaveFunctionDefault = easeQuadInOut
  private translateStartForwardPositionDefault = dim.width
  private translateStartBackwardPositionDefault = -dim.width

  render() {
    const stylePage = this.props.stylePage || styles.page
    const transEndDur = this.props.translateEnterDuration || this.translateEnterDurationDefault
    const transEndFunc = this.props.translateEnterFunction || this.translateEnterFunctionDefault
    const transEndPos = this.props.translateEnterPosition || this.translateEnterPositionDefault
    const transEndForPos = this.props.translateEndForwardPosition || this.translateEndForwardPositionDefault
    const transEndBacPos = this.props.translateEndBackwardPosition || this.translateEndBackwardPositionDefault
    const transLeaveDur = this.props.translateLeaveDuration || this.translateLeaveDurationDefault
    const transLeaveFunc = this.props.translateLeaveFunction || this.translateLeaveFunctionDefault
    const transStartForPos = this.props.translateStartForwardPosition || this.translateStartForwardPositionDefault
    const transStartBacPos = this.props.translateStartBackwardPosition || this.translateStartBackwardPositionDefault
    return (
      <Animate
        show={this.props.associatedStatus === this.props.currentStatus}
        start={{translate: this.props.isGoingForward ? transStartForPos : transStartBacPos}}
        enter={{translate: [transEndPos], timing: {duration: transEndDur, ease: transEndFunc}}}
        leave={{translate: [this.props.isGoingForward ? transEndForPos : transEndBacPos],
          timing: {duration: transLeaveDur, ease: transLeaveFunc}}}>
        {({translate}: any) => (
          <View style={[stylePage, {transform: [{translateX: translate}]}]}>
            {this.props.component}
          </View>
        )}
      </Animate>

    )
  }
}

export default PageComponent

const styles = StyleSheet.create({
  page: {
    flex: 1,
    position: 'absolute',
    top: 0,
    height: '100%',
    width: '100%',
    alignItems: 'flex-start'
  }
})
