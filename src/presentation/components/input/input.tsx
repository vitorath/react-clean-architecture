import React from 'react'
import Styles from './input-styles.scss'
import Context from '@/presentation/contexts/form/form-context'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  const { state, setState } = React.useContext(Context)
  const inputRef = React.useRef<HTMLInputElement>()
  const errorMessage = state[`${props.name}Error`]

  return (
    <div
      data-testid={`${props.name}-wrap`}
      className={Styles.inputWrap}
      data-status={errorMessage ? 'invalid' : 'valid'}
    >
      <input
        {...props}
        ref={inputRef}
        title={errorMessage}
        placeholder=" "
        data-testid={props.name}
        readOnly
        onFocus={(e) => { e.target.readOnly = false }}
        onChange={(e) => { setState({ ...state, [e.target.name]: e.target.value }) }}
      />
      <label
        data-testid={`${props.name}-label`}
        title={errorMessage}
        onClick={() => inputRef.current.focus()}
      >
        {props.placeholder}
      </label>
    </div>
  )
}

export default Input
