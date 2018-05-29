import React, { Component } from 'react'

class Asset extends Component {
  render() {
    let className = this.props.className || ''
    let animate = this.props.animate ? 'animated' : ''
    let props = {
      id: this.props.id,
      src: this.props.src || `/images/${this.props.id}.png`,
      onClick: this.props.onClick,
      className: `${className} ${animate} `,
      animate: this.props.animate
    }
    return (
      <img {...props} alt="" />
    )
  }
}

export default Asset
