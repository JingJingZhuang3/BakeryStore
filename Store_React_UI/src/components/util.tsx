import { isText, isNumber, isEmail, isPhone, isZip } from "../constants/constant";


type State = {
  activeStep: number
  formValues: ValidationSchema
}
type Action =
  | { type: 'increase' }
  | { type: 'decrease' }
  | { type: 'form-value'; name: string; fieldValue: string }
  | { type: 'form-error'; name: string; error: string }


export function validator(fieldName: any, value: string,  checked?: boolean): any {
  const { required, validate, minLength, maxLength, helperText } = fieldName

  let error: string = "";

  if (required && !value) error = 'This field is required'
  if (minLength && value && value.length < minLength) error = `Minimum ${minLength} characters is required.`
  if (maxLength && value && value.length > maxLength) error = 'Maximum length exceeded!'
  if (validate) {
    switch (validate) {
      case 'text':
        if (value && !isText.test(value)) error = helperText || 'This field accepts text only.'
        break

      case 'number':
        if (value && !isNumber.test(value)) error = helperText || 'This field accepts numbers only.'
        break

      case 'email':
        if (value && !isEmail.test(value)) error = helperText || 'Please enter a valid email address.'
        break

      case 'phone':
        if (value && !isPhone.test(value))
          error = helperText || 'Please enter a valid phone number. i.e: xxx-xxx-xxxx'
        break

      case 'zip':
        if (value && !isZip.test(value)) error = helperText || 'Please enter a valid zip code.'
        break

      case 'checkbox':
        if (!checked) error = helperText || 'Please provide a valid value.'
        break

      case 'select':
        if (!value) error = helperText || 'Please select a value.'
        break

      default:
        break
    }
  }

  return error;
}

export declare type ValidationSchema = Record<
  string,
  {
    value?: any
    error?: string
    required?: boolean
    validate?: 'text' | 'number' | 'email' | 'phone' | 'zip' | 'checkbox' | 'select'
    minLength?: number
    maxLength?: number
    helperText?: string
  }
>

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increase':
      return {
        ...state,
        activeStep: state.activeStep + 1
      }
    case 'decrease':
      return {
        ...state,
        activeStep: state.activeStep - 1
      }
    case 'form-value':
      return {
        ...state,
        formValues: {
          ...state.formValues,
          [action.name]: {
            ...state.formValues[action.name],
            value: action.fieldValue
          }
        }
      }
    case 'form-error':
      return {
        ...state,
        formValues: {
          ...state.formValues,
          [action.name]: {
            ...state.formValues[action.name],
            error: action.error
          }
        }
      }

    default:
      return state
  }
}

export function getUrlParameter(name: string, search: string): string {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

  var results = regex.exec(search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};