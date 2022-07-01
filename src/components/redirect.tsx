import React, {useEffect, useState} from 'react'
import {Api} from "../api/api";


function Redirect() {
  const [redirect, setRedirect] = useState(true)
  const LinkGet = () => {
    Api.getByMinLy('https://minly.ru/' + window.location.href.split('/')[3])
      .then( (response: any) => {
        if (!response.data.error) {
          window.location.href = response.data
        } else {
          setRedirect(false)
        }


      })
  }
  LinkGet()
  return (
    <>
      {redirect ?
        ''
        :
        <p style={{fontWeight:700, margin: "auto auto"}}>404 not found</p>}
    </>
  )
}

export default Redirect;
