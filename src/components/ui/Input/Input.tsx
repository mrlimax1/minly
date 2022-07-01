import React from 'react'
import SharedSvgSelector from '../../../assets/icons/SharedSvgSelector';
import s from './Input.module.sass'



const Input = (props: any) => {
  const textInput: any = React.createRef();
  function focusInput() {
    textInput.current.focus()
  }
  return (
    <div className={s.input}
         onClick={focusInput}
    >
      <div className={s.input__arrow}>
        <SharedSvgSelector id={'arrow'}/>
      </div>
      <input
        {...props}
        placeholder={'Ссылка....'}
        className={s.input__field}
        type="text"
        ref={textInput}
      />
    </div>
  )
}
export default Input;