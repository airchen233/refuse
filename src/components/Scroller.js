import React from 'react'
import { Scroller } from 'react-fully-scrolled'

class CustomScroller extends Scroller {
  componentDidMount() {
    this.execAnimate(1)
  }
  execAnimate(page) {
    let section = document.querySelectorAll(".pagescroll")[page - 1]
    if (section) {
      section.querySelectorAll("img").forEach((e,i) => {
        e.className += e.getAttribute("animate") || ""
      })
    }
  }
  render() {
    let options = {
      curPage: 1,
      onBeforeScroll: (from, to) => {
        this.execAnimate(to)
      },
      onAfterScroll: (page) => {},
      isEnabled: false
    }
    return (
      <Scroller {...options}>{this.props.children}</Scroller>
    )
  }
}

export default CustomScroller
