import { ValidationSchema } from "../constants/constant";

export const initialValues: ValidationSchema = {
  name: {
    value: '',
    error: '',
    required: true,
    validate: 'text',
    minLength: 2,
    maxLength: 20,
    helperText: 'Custom error message'
  },
  email: {
    value: '',
    required: true,
    error: '',
    validate: 'email'
  },
  password: {
    value: '',
    required: true,
    error: '',
  },
  subject: {
    value: '',
    required: true,
    error: '',
    validate: 'text',
    minLength: 3,
    maxLength: 20
  },
  message: {
    value: '',
    required: true,
    error: '',
    validate: 'text',
    minLength: 3,
    maxLength: 500
  }
}
