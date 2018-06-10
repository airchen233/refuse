import React from 'react'
import Asset from './Asset'

class Icon extends Asset {
  constructor(props) {
    super(props)
    this.state = {
      status: 0
    }
    this.onClick = this.onClick.bind(this)
  }
  onClick() {
    if (!(this.props.disable && !this.state.status)) {
      let status
      if (this.state.status) {
        status = 0
        this.props.pop(this.props.id)
      } else {
        status = 1
        this.props.push(this.props.id)
      }
      this.setState({
        status: status
      })
    }
  }
  render() {
    let props = {
      ...this.props,
      className: 'icon',
      src: `images/${this.props.id}_${this.state.status + 1}.png`,
      onClick: this.onClick
    }
    return (
      <Asset {...props} />
    )
  }
  componentWillMount() {
    let img = document.createElement('img')
    img.src = `images/${this.props.id}_2.png`
  }
}

export default Icon
