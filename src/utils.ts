import {Dispatch, RefObject, SetStateAction} from "react";

const downloadQRCode = (qrRef: RefObject<any>) => {
  // @ts-ignore
  let canvas = qrRef.current.children[0].toDataURL("image/png");

  let anchor = document.createElement("a");
  anchor.href = canvas;
  anchor.download = `qr-code.png`;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
};

async function copyLink(setData: Dispatch<SetStateAction<string>>, data: string, value: string) {
  setData('copy!')
  setTimeout(() => setData('скопировать ссылку'), 1500)
  if ('clipboard' in navigator) {
    return await navigator.clipboard.writeText(value);
  } else {
    return document.execCommand('copy', true, data);
  }
}
export {copyLink, downloadQRCode};
