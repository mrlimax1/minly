import QRCode from 'qrcode.react'
import React from 'react'
import s from './HistoryItem.module.sass'
import Button from "../../ui/Button/Button";
import {copyLink, downloadQRCode} from "../../../utils";


type Props = {
  initialLink: string
  link: string
}

const HistoryItem = ({initialLink, link}: Props) => {
  const qrRef: any = React.createRef();
  const [copyLinkData, copyLinkDataSet] = React.useState('скопировать ссылку')
  let viewInitialLink = initialLink.length > 30 ? initialLink.substr(0, 30) + '...' : initialLink
  return (
    <div className={s.history_item__container}>
      <div ref={qrRef} className={s.history_item__qr}>
        <QRCode
          value={link}
          size={512}
          className={s.get_result__qr}
          style={{width: "auto", height: "auto"}}
        />
      </div>
      <div className={s.history_item_result}>
          <p className={s.history_item_result_link + ' ' + s.initial_link}>
            Ссылка: <a className={s.link_a} href={initialLink}>{viewInitialLink}</a>
          </p>
          <p className={s.history_item_result_link}>
            Результат: <a className={s.link_a} href={link}>{link}</a>
          </p>
      </div>
      <div className={s.history_item__buttons}>
        <Button text={copyLinkData} onClick={() => copyLink(copyLinkDataSet, copyLinkData, link)}/>
        <Button text={'скачать QR-код'} onClick={() => downloadQRCode(qrRef)}/>
      </div>

    </div>
  )
}

export default HistoryItem