import css from './IndividualInput.module.css'
import { useState, forwardRef, useImperativeHandle } from 'react'

const IndividualInput = forwardRef(
  ({ type, name, placeholder, onChange, value, validator, desc }, ref) => {
    const [isValid, setIsValid] = useState(true)
    const [validationMessage, setValidationMessage] = useState('')

    const wrongInputMessages = {
      contactFirstName: 'Wartość tego pola jest zbyt krótka',
      contactLastName: 'Wartość tego pola jest zbyt krótka',
      companyName: 'Wartość tego pola jest zbyt krótka',
      nip: 'Wartość tego pola jest nieprawidłowa\nPrzykład: "7630004658"',
      street: 'Wartość tego pola jest zbyt krótka',
      city: 'Wartość tego pola jest zbyt krótka',
      postalCode: 'Wartość tego pola jest nieprawidłowa\nPrzykład: "64-510"',
      email: 'Wartość tego pola jest nieprawidłowa',
      phone: 'Wartość tego pola jest nieprawidłowa',
      privatePolicy: 'To pole jest wymagane'
    }

    const runValidation = () => {
      if (typeof value === 'string' && value.trim().length === 0) {
        setIsValid(false)
        setValidationMessage('To pole nie może być puste')
        return false
      } else if (validator && !validator(value)) {
        setIsValid(false)
        setValidationMessage(wrongInputMessages[name])
        return false
      }
      setIsValid(true)
      setValidationMessage('')
      return true
    }

    const resetValidation = () => {
      setIsValid(true)
      setValidationMessage('')
    }

    // Expose runValidation to parent
    useImperativeHandle(ref, () => ({
      validate: runValidation,
      resetFieldValidation: resetValidation
    }))

    return (
      <section className={css.individualInput}>
        <section className={css.fields}>
          <input
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            className={`${css.inputItem} ${isValid ? '' : css.invalid}`}
            onBlur={validator && runValidation}
            style={desc ? { margin: '0 20px' } : { width: '100%' }}
          />
          {desc && <p className={css.description}>{desc}</p>}
        </section>
        {!isValid && (
          <span className={css.reqMessage}>{validationMessage}</span>
        )}
      </section>
    )
  }
)

export default IndividualInput
