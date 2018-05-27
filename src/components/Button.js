import React from 'react'
import Asset from './Asset'

class Button extends Asset {
  render() {
    let props = {
      id: this.props.id,
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
