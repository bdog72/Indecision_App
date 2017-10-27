import React, { Component } from 'react'

export default class Options extends Component {
  constructor (props) {
    super(props)

    this.handleRemoveAll = this.handleRemoveAll.bind(this)
  }

  handleRemoveAll () {
    alert('handleRemoveAll')
  }
  render () {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
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
