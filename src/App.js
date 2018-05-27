import React, { Component } from 'react'
import Scroller from './components/Scroller'
import { Cover, Quest, End } from './components/Page'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.onPush = this.onPush.bind(this)
    this.onPop = this.onPop.bind(this)
    this.onEnd = this.onEnd.bind(this)
    this.results = []
    this.state = {
      point: 0
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
      point: this.results.reduce((sum, ele) => (sum + ele))
    })
  }
  render() {
    let event = {
      push: (x) => this.onPush(x),
      pop: (x) => this.onPop(x),
      end: () => this.onEnd()
    }
    let result = {
      point: this.state.point
    }
    return (
      <Scroller>
        <Cover />
        <Quest id={1} {...event} />
        <Quest id={2} {...event} />
        <Quest id={3} {...event} />
        <Quest id={4} {...event} />
        <End {...result} />
      </Scroller>
    )
  }
}

export default App
