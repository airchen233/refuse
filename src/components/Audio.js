import React, { Component } from 'react'

class Audio extends Component {
  render() {
    let props = {
      src: this.props.src ? "audios/aquarium.mp3" : "audios/success.mp3",
      autoPlay: true,
      loop: this.props.src
    }
    return (
      <audio {...props}></audio>
    )
  }
  componentWillMount() {
    let audio = document.createElement('audio')
    audio.src = "audios/aquarium.mp3"
    audio.src = "audios/success.mp3"
  }
}

export default Audio
