import {ReactNode} from 'react'

interface BtnProps {
  btnText?: string;
  onClick?: () => void;
  icon?: ReactNode
}
const Button = ({btnText, onClick, icon}:BtnProps) => {
  return (
    <button className="button-71" role="button" onClick={onClick}>{btnText || icon}</button>
  )
}

export default Button