import React from 'react'
import { Section } from 'react-fully-scrolled'

class BasicSection extends Section {
  render() {
    return (
      <Section>{this.props.children}</Section>
    )
  }
}

export default BasicSection
