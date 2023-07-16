export enum FieldNames {
  Name = "name",
  Email = "email",
  Password = "password",
  Subject = "subject",
  Message = "message",
}

export const isText = /^[A-Z ]+$/i
export const isEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
export const isPhone = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4,6})$/ // us
export const isZip = /^[0-9]{5}([- /]?[0-9]{4})?$/ // us
export const isNumber = /^\d+$/

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

export const ACCESS_TOKEN = "accessToken";
export const API_BASE_URL = "http://localhost:5000";
export const OAUTH2_REDIRECT_URI = "http://localhost:3000/oauth2/redirect";
export const GOOGLE_AUTH_URL = API_BASE_URL + "/oauth2/authorize/google?redirect_uri=" + OAUTH2_REDIRECT_URI;
