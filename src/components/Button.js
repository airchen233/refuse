import React from 'react'
import Asset from './Asset'

class Button extends Asset {
  render() {
    let props = {
      ...this.props,
      className: 'button ' + this.props.id,
      onClick: () => {
        window.fpTurnTo(this.props.to)
        if (this.props.click) {
          this.props.click()
        }
      }
    }
    return (
      <Asset {...props} />
    )
  }
}

export default Button
