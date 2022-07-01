import React from 'react'
import s from './BackButton.module.sass'
type Props = {
  onClick: any
}

const BackButton = ({onClick}: Props) => {
  return (
    <button onClick={onClick} className={s.back_button}>
      Вернуться назад
    </button>
  )
}

export default BackButton