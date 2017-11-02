import React from 'react'

const Options = (props) => (
  <div>
    <div className='widget-header'>
      <h3 className='widget-header__3'>Your Options</h3>
      <button onClick={props.handleDeleteOptions}>Remove All</button>

    </div>
    {props.options.length === 0 && <p className='widget__message'>Please Add An Option To Get Started</p>}
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
