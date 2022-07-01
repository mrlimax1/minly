import React, {Dispatch, SetStateAction, useState} from 'react'

import Input from '../../../ui/Input/Input'
import s from './LinksForm.module.sass'
import GetResult from '../GetResult/GetResult';
import {useHistory} from "../../../../hooks/useHistory";
import {HistoryData} from "../../../../context/historyContext";
import {Api} from "../../../../api/api";


type Props = {
  form: boolean
  setForm: Dispatch<SetStateAction<boolean>>
}

const LinksForm = ({form, setForm}: Props) => {

  const userHistory = useHistory();
  const [link, setLink] = useState('')
  const [counter, setCounter] = useState(0)
  const [generateLink, setGenerateLink] = useState('')

  function getLink(e: React.FormEvent<HTMLElement>) {
    e.preventDefault()
    if (link == 'Ссылка недействительна') return
    Api.get(link).then(response => {

      if (response.data.error) {
        setLink('Ссылка недействительна')
        setTimeout(() => {
          setLink('')}, 1400)

      } else {
        setLink(response.data.initial_link)
        setGenerateLink(response.data.link)
        setCounter(response.data.counter)
        setForm(false)

        let h = userHistory.history.filter(function(f: HistoryData) { return f.initialLink !== response.data.initial_link })

        userHistory.editHistory([{
          initialLink: response.data.initial_link,
          link: response.data.link
        },...h])

      }
    }).catch((error) => console.log(error))

  }
  return (
    form ? <form className={s.links_form__wrapper} onSubmit={getLink}>
        <Input
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLink(event.target.value)}
          value={link}
          type="url"
          name="url"
        />
        <button
          className={s.links_form__wrapper_button}
        >
          получить ссылку
        </button>
      </form>
      : <GetResult initialLink={link} link={generateLink} counter={counter}/>
  )
}

export default LinksForm