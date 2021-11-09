import React from 'react'
import Spinner from '../spinner/spinner'
import Styles from './form-status-styles.scss'
import FormContext from '@/presentation/contexts/form/form-context'

const FormStatus: React.FC = () => {
  const { state } = React.useContext(FormContext)
  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {state.isLoading && <Spinner className={Styles.spinner} /> }
      {state.mainError && <span data-testid="main-error" className={Styles.error}>{state.mainError}</span>}
    </div>
  )
}

export default FormStatus
