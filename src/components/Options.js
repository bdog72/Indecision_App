import React, { Component } from 'react'

export default class Options extends Component {
  render () {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
      </div>
    )
  }
}

class Option extends Component {
  render () {
    return (
      <div>
        {this.props.optionText}
      </div>
    )
  }
}
