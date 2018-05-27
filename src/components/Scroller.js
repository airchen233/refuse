import React from 'react'
import { Scroller } from 'react-fully-scrolled'

class CustomScroller extends Scroller {
  componentDidMount() {
//    window.fpTurnTo(1)
  }
  render() {
    let options = {
      curPage: 1,
      onBeforeScroll: (from, to) => {},
      onAfterScroll: (page) => {},
      isEnabled: false
    }
    return (
      <Scroller {...options}>{this.props.children}</Scroller>
    )
  }
}

export default CustomScroller
