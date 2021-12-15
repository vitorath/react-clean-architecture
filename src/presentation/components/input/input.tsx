import React from 'react'
import Styles from './input-styles.scss'
import Context from '@/presentation/contexts/form/form-context'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  const { state, setState } = React.useContext(Context)
  const inputRef = React.useRef<HTMLInputElement>()
  const errorMessage = state[`${props.name}Error`]

  return (
    <div className={Styles.inputWrap}>
      <input
        {...props}
        ref={inputRef}
        placeholder=" "
        data-testid={props.name}
        readOnly
        onFocus={(e) => { e.target.readOnly = false }}
        onChange={(e) => { setState({ ...state, [e.target.name]: e.target.value }) }}
      />
      <label
        onClick={() => inputRef.current.focus()}>
        {props.placeholder}
      </label>
      <span
        data-testid={`${props.name}-status`}
        title={errorMessage || 'Tudo certo!'}
        className={Styles.status}
      >
        {errorMessage ? '🔴' : '🟢'}
      </span>
    </div>
  )
}

export default Input
