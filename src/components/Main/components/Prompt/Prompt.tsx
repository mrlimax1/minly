import React from 'react'
import SharedSvgSelector from '../../../../assets/icons/SharedSvgSelector'
import s from './Prompt.module.sass'

type Props = {
  text: string,
  textClass: string,
  iconId: string
  onClick: any
}

const Prompt = ({ iconId, text, textClass, onClick}: Props) => {
  return (
    <div className={s.prompt__wrapper} onClick={onClick}>
      <div className={s.prompt__icon}>
        <SharedSvgSelector id={iconId}/>
      </div>
      <div className={textClass}>
      {text}
      </div>
    </div>
  )
}

export default Prompt