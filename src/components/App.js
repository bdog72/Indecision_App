import React, { Component } from 'react'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import AddOption from './AddOption'

export default class App extends Component {
  render () {
    const title = 'Indecision App-App-D'
    const subtitle = 'Put your hands in the life of a computer'
    const options = ['One thing', 'Two thing', 'Three thing']
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    )
  }
}
