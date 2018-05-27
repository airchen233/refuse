import React, { Component } from 'react'
import Section from './Section'
import Asset from './Asset'
import Icon from './Icon'
import Button from './Button'
import 'animate.css'

const Cover = () => (
  <Section>
    <Asset id="e1_1" animate="fadeIn" />
    <Asset id="e1_2" />
    <Asset id="e1_3" />
    <Button id="b1" to={2} />
  </Section>
)

const End = (props) => {
  let id = Math.ceil(props.point / 2 ) * 10
  return (
    <Section>
      <Asset id="e10_1" />
      <Asset id={`e10_${id}`} className="point" />
      <Asset id="e10_2" />
      <Button id="b6" click={()=>window.location.reload()} />
    </Section>
  )
}

class Quest extends Component {
  constructor(props) {
    super(props)
    this.onPush = this.onPush.bind(this)
    this.onPop = this.onPop.bind(this)
    this.onSave = this.onSave.bind(this)
    this.state = {
      selected: []
    }
  }
  onPush(x) {
    this.setState({
      selected: [...this.state.selected, x]
    })
    console.log(this.state.selected)
  }
  onPop(x) {
    let index = this.state.selected.indexOf(x)
    this.setState({
      selected: [
        ...this.state.selected.slice(0, index),
        ...this.state.selected.slice(index + 1)
      ]
    })
    console.log(this.state.selected)
  }
  onSave() {
    let point = this.state.selected.length
    this.state.selected.forEach(e => {
      if (["i3_4", "i5_6", "i7_6", "i9_5"].includes(e)) {
        point -= 1
      }
    })
    this.props.push(point)
  }
  render() {
    let id = this.props.id * 2
    let event = {
      push: (x) => this.onPush(x),
      pop: (x) => this.onPop(x),
      disable: (this.state.selected.length >= 5)
    }
    let eventSave = {
      click: () => this.onSave()
    }
    let eventBack = {
      click: () => this.props.pop()
    }
    let eventEnd = {
      click: () => {
        this.onSave()
        this.props.end()
      }
    }
    let style = {
      float: 'none',
      margin: '0 auto'
    }
    return (
      <span>
        <Section>
          <Asset id={`e2_1`} />
          <Asset id={`e${id}_2`} />
          {id === 2 ? (
            <Button id="b2" to={id + 1} {...style} />
          ) : (
            <span>
              <Button id="b4" to={id - 1} {...eventBack} />
              <Button id="b2" to={id + 1} />
            </span>
          )}
        </Section>
        <Section>
          <Asset id="e3_1" />
          <Asset id={`e${id + 1}_2`} />
          <div id="e3_3">
            <Icon id={`i${id + 1}_1`} {...event} />
            <Icon id={`i${id + 1}_2`} {...event} />
            <Icon id={`i${id + 1}_3`} {...event} />
            <Icon id={`i${id + 1}_4`} {...event} />
            <Icon id={`i${id + 1}_5`} {...event} />
            <Icon id={`i${id + 1}_6`} {...event} />
          </div>
          <Button id="b4" to={id} />
          {id !== 8 ? (
            <Button id="b3" to={id + 2} {...eventSave} />
          ) : (
            <Button id="b5" to={id + 2} {...eventEnd} />
          )}
        </Section>
      </span>
    )
  }
}

export { Cover, End, Quest }
