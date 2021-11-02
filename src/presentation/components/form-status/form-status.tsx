import React from 'react'
import Spinner from '../spinner/spinner'
import Styles from './form-status-styles.scss'
import FormContext from '@/presentation/contexts/form/form-context'

const FormStatus: React.FC = () => {
  const { state, errorState } = React.useContext(FormContext)

  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {state.isLoading && <Spinner className={Styles.spinner} /> }
      {state.errorMessage && (
        <span className={Styles.error}>{errorState.main}</span>
      )}
    </div>
  )
}

export default FormStatus
