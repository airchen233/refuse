import React, { Component } from 'react'

class Asset extends Component {
  render() {
    let animate = this.props.animate ? ' animated' : ''
    let props = {
      id: this.props.id,
      src: `/images/${this.props.id}.png`,
      className: this.props.className || '' + animate,
      ...this.props
    }
    return (
      <img {...props} alt="" />
    )
  }
}

export default Asset
