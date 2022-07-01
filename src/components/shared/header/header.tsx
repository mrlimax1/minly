import React from 'react'
import s from './Header.module.sass'
import SharedSvgSelector from "../../../assets/icons/SharedSvgSelector";

type Props = {}

const Header = (props: Props) => {
  let title = 'Сокращалка'
  let linkGithub = 'https://github.com/mrlimax1/minly'
  return (
    <header className={s.header}>
      <div className={s.header__logo_container}>
        <div className={s.header__logo}>
          <SharedSvgSelector id={'logo'} />
        </div>
        {title}
      </div>
      <a className={s.header__github_container} href={linkGithub}>
        <div className={s.header__github}>
          <SharedSvgSelector id={'github'} />
        </div>
        github
      </a>
    </header>
  )
}
export default Header;