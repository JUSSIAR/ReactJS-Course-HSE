import React from 'react'
import './buttonStyle.scss'

const MyButton = ({
  onClick,
  index,
  value
}) => ((index !== undefined)
  ? <button onClick = {() => onClick(index)} className = "Button">
      {value}
    </button>
  : <button onClick = {onClick} className = "Button">
      {value}
    </button>
)

export default MyButton