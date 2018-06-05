import React, { Component } from 'react'
import Scroller from './components/Scroller'
import { Cover, Quest, End } from './components/Page'
import Audio from './components/Audio'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.onPush = this.onPush.bind(this)
    this.onPop = this.onPop.bind(this)
    this.onEnd = this.onEnd.bind(this)
    this.results = []
    this.state = {
      point: 0,
      audio: true
    }
  }
  onPush(x) {
    this.results.push(x)
    console.log(this.results)
  }
  onPop() {
    this.results.pop()
    console.log(this.results)
  }
  onEnd() {
    this.setState({
      point: this.results.reduce((sum, ele) => (sum + ele)),
      audio: false
    })
  }
  render() {
    let event = {
      push: (x) => this.onPush(x),
      pop: (x) => this.onPop(x),
      end: () => this.onEnd()
    }
    return (
      <Scroller>
        <Cover />
        <Quest id={1} {...event} />
        <Quest id={2} {...event} />
        <Quest id={3} {...event} />
        <Quest id={4} {...event} />
        <End point={this.state.point} />
        <Audio src={this.state.audio} />
      </Scroller>
    )
  }
}

export default App
