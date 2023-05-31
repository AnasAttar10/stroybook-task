import React from 'react'
import PropTypes from 'prop-types';
import './Button.css'
const ButtonNew = ({variant , handleClick }) => {
  return (
    <button className={`button ${variant}`} onClick={()=>handleClick()}>
      children
    </button>
  )
}



export default ButtonNew

ButtonNew.propTypes = {
  variant: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};