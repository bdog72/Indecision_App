import React, { Component } from 'react'

export default class Action extends Component {
  handlePick () {
    alert('handlePick')
  }
  render () {
    return (
      <div>
        <button onClick={this.handlePick}>What should i do</button>
      </div>
    )
  }
}
