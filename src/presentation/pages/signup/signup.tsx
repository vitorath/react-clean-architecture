import React from 'react'
import Styles from './signup-styles.scss'
import { Link } from 'react-router-dom'

import { LoginHeader, Footer, Input, FormStatus } from '@/presentation/components'
import FormContext from '@/presentation/contexts/form/form-context'

const SignUp: React.FC = () => {
  return (
    <div className={Styles.signup}>
      <LoginHeader />
      <FormContext.Provider value={{ state: {} }}>
      <form className={Styles.form}>
        <h2>Criar Conta</h2>
        <Input type="text" name="name" placeholder="Digite seu nome" />
        <Input type="email" name="email" placeholder="Digite seu e-mail" />
        <Input type="password" name="password" placeholder="Digite sua senha" />
        <Input type="password" name="passwordConfirmation" placeholder="Repita sua senha" />
        <button className={Styles.submit} type="submit">Enviar</button>
        <Link to="/login" className={Styles.link}>Voltar Para Login</Link>
        <FormStatus />
      </form>
      </FormContext.Provider>
      <Footer />
    </div>
  )
}

export default SignUp
