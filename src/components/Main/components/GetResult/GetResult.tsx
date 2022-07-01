import React from 'react'
import Button from '../../../ui/Button/Button'
import s from './GetResult.module.sass'
import QRCode from "qrcode.react";
import { copyLink, downloadQRCode } from '../../../../utils';

type Props = {
  link: string,
  initialLink: string,
  counter: number
}

const GetResult = ({link, initialLink, counter}: Props) => {
  const qrRef: any = React.createRef();
  const resRef: any = React.createRef()

  const  [width, setWidth] = React.useState(window.innerWidth)
  React.useEffect(() => {
    setWidth(window.innerWidth)
  }, [window.innerWidth])
  const [copyLinkData, copyLinkDataSet] = React.useState('скопировать ссылку')
  let viewInitialLink = initialLink.length > 30 ? initialLink.substr(0, 30) + '...' : initialLink

  return (
   <div className={s.get_result_wrapper}>
     <div className={s.get_result}>
       <p className={s.get_result__initial_link}>
         Изначальная ссылка: <a href={initialLink} className={s.get_result__initial_link_wrapper}>{viewInitialLink}</a>
       </p>
         <div ref={qrRef} className={s.get_result__qr_container}>
           <QRCode
             value={link}
             size={512}
             style={{width: "auto", height: "auto"}}
             className={s.get_result__qr}
           />
         </div>
           <div className={s.get_result__buttons}>
             <Button text={copyLinkData} onClick={() => copyLink(copyLinkDataSet, copyLinkData, link)}/>
             <Button text={'скачать QR-код'} onClick={() => downloadQRCode(qrRef)}/>
         </div>
         <div className={s.get_result__result_wrapper}>
           <p className={s.get_result__result}>
             Результат: <a className={s.get_result__result_res} href={link} ref={resRef}>{link}</a>
           </p>
           <p className={s.get_result__result_propmt}>
             Вы {counter}, кто сокращает эту ссылку!
           </p>
         </div>
     </div>
   </div>
  )
}
export default GetResult