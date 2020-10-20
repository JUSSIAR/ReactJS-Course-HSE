import React from 'react'
import './inputStyle.css'

const InputElement2 = ({
  onChange, 
  value
}) => {
  return (
    <div className = "person">
      <label> Description </label>
      <input
        value = {value}
        type = "text"
        onChange = {onChange}
        placeholder = "description..."
      /> <br/>
    </div>
  )
}

export default InputElement2