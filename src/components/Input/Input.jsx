import React from 'react'
import './Input.css'
const Input = ({size='medium' , type="text" ,...args }) => {
  return (
    <input className={`newinput ${size}`} type={type} {...args}/>
  )
}

export default Input