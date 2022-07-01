import React from 'react'
import SharedSvgSelector from '../../../../assets/icons/SharedSvgSelector'
import s from './Prompt.module.sass'

type Props = {
  value: number,
  onClick: any,

}

const HistoryPrompt = ({ value, onClick}: Props) => {
  return (
    <div className={s.prompt__wrapper} onClick={onClick}>
      <div className={s.prompt__icon}>
        <SharedSvgSelector id={'history'}/>
      </div>
      <div className={"promptText_history"} >Перейти к вашей истории</div>
      <div className={s.prompt__circle}>{value}</div>
    </div>
  )
}

export default HistoryPrompt