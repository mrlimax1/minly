import React from 'react'
import s from './Button.module.sass'


type Props = {
  text: string,
  onClick: any
}

const Button = ({text, onClick}: Props) => {
  return (
    <a
      className={s.button_accent}
      onClick={onClick}
      target={'_blank'}
    >
      {text}
    </a>
  )
}

export default Button