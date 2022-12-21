import React from 'react'

interface BtnProps {
  btnText?: string;
  onClick?: () => void
}
const Button = ({btnText, onClick}:BtnProps) => {
  return (
    <button className="button-71" role="button" onClick={onClick}>{btnText}</button>
  )
}

export default Button