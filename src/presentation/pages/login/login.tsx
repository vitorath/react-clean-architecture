import React from 'react'
import Styles from './login-styles.scss'
import { LoginHeader, Footer, Input, FormStatus } from '@/presentation/components'

import FormContext from '@/presentation/contexts/form/form-context'

type StateProps = {
  isLoading: boolean
  errorMessage: string
}

const Login: React.FC = () => {
  const [state] = React.useState<StateProps>({
    isLoading: false,
    errorMessage: ''
  })

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <FormContext.Provider value={state}>
      <form className={Styles.form}>
        <h2>Login</h2>
        <Input type="email" name="email" placeholder="Digite seu e-mail" />
        <Input type="password" name="password" placeholder="Digite sua senha" />
        <button
          data-testid="submit"
          disabled
          className={Styles.submit}
          type="submit"
          >
            Enviar
        </button>
        <a className={Styles.link}>Criar contar</a>
        <FormStatus />
      </form>
      </FormContext.Provider>
      <Footer />
    </div>
  )
}

export default Login
