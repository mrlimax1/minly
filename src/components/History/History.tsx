import React from 'react'
import SharedSvgSelector from '../../assets/icons/SharedSvgSelector'
import s from './History.module.sass'
import HistoryItem from './HistoryItem/HistoryItem'
import {useHistory} from "../../hooks/useHistory";

type Props = {
  setHistoryView: any
}

const History = ({setHistoryView}: Props) => {
  const userHistory = useHistory()
  return (
    <>
    <div className={s.history_container}>
      <div className={s.history_container_title_wrapper}>
        <p className={s.history_container_title}>
          <div className={s.history_container_title_icon}>
            <SharedSvgSelector id={'history'}/>
          </div>
          Ваша история
        </p>
        <div className={s.history_trash} onClick={() => {userHistory.editHistory([]);setHistoryView(false)}}>
          <SharedSvgSelector id={'trash'}/>
        </div>
      </div>
      <div className={s.history_items_list}>
        {
          userHistory.history.map( (h: any, index: number) =>
            <HistoryItem link={h.link} initialLink={h.initialLink} key={index}/>
          )
        }
          </div>
    </div>
    </>
  )
}

export default History