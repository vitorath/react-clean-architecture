import React from 'react'
import Logo from '../logo/logo'
import Styles from './login-header.scss'

const LoginHeader: React.FC = () => {
  return (
    <header className={Styles.header}>
      <Logo />
      <h1>4Dev - Enquetes para Programadores</h1>
    </header>
  )
}

export default React.memo(LoginHeader)
