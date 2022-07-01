import React, {Dispatch, SetStateAction, useState} from 'react'
import LinksForm from "./components/LinksForm/LinksForm";
import Prompt from "./components/Prompt/Prompt";
import BackButton from "../ui/BackButton/BackButton";
import HistoryPrompt from "./components/Prompt/HistoryPrompt";
import {useHistory} from "../../hooks/useHistory";

type Props = {
  setHistoryView: Dispatch<SetStateAction<boolean>>,
}

const Main = ({setHistoryView}: Props) => {
  const [form, setForm] = useState(true)

  const userHistory = useHistory()
  const historyCheckAndView = () => {
    setHistoryView(true)
  }
  return (
    <>
      <LinksForm  form={form} setForm={setForm}/>
      <Prompt
        text={'Заполните, чтобы получить сокращённую ссылку!'}
        textClass={"promptText_help"}
        iconId={'help'}
        onClick={() => null}
      />
      { userHistory.history.length != 0 ?
        <HistoryPrompt
          value={userHistory.history.length}
          onClick={historyCheckAndView}
      />:
        <Prompt
        text={'Ваша история пуста'}
        textClass={""}
        iconId={'history'}
        onClick={() => null}
      />}
      {!form ? <BackButton onClick={()=> setForm(true)} /> : ''}

    </>
  )
}

export default Main