import React, { Component } from 'react'

export default class AddOption extends Component {
  handleAddOption (e) {
    e.preventDefault()

    const option = e.target.elements.option.value

    if (option) {
      alert('option')
    }
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option' />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}
