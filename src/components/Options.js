import React from 'react'

const Options = (props) => (
  <div>
    <button onClick={props.handleDeleteOptions}>Remove All</button>
    {props.options.length === 0 && <p>Please Add An Option To Get Started</p>}
    {
      props.options.map((option) => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))
    }
  </div>
)

const Option = (props) => (
  <div>
    {props.optionText}
    <button
      onClick={(e) => {
        props.handleDeleteOption(props.optionText)
      }}
    >
    remove
    </button>
  </div>
)

export default Options
