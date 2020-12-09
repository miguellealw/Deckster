import * as yup from 'yup'

export const emailNotLongEnough = 'Email must be at least 3 characters'
export const passwordNotLongEnough = 'Password must be at least 3 characters'
export const invalidEmail = 'Email Must be Valid'

export const registerPasswordValidation = yup
  .string()
  .min(3, passwordNotLongEnough)
  .max(255)
  .required('Password is Required')

export const validLoginUserSchema = yup.object().shape({
  email: yup
    .string()
    .min(3, emailNotLongEnough)
    .max(255)
    .email(invalidEmail)
    .required('Email is Required'),
  password: registerPasswordValidation,
})

export const validSignupUserSchema = yup.object().shape({
  email: yup
    .string()
    .min(3, emailNotLongEnough)
    .max(255)
    .email(invalidEmail)
    .required('Email is Required'),
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  password: registerPasswordValidation,
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Password Confirmation is Required'),
})

// const invalidLogin = 'Invalid Login'

// export const loginSchema = yup.object().shape({
//   email: yup
//     .string()
//     .min(3, invalidLogin)
//     .max(255, invalidLogin)
//     .email(invalidLogin)
//     .required('Email is Required'),
//   password: yup
//     .string()
//     .min(3, invalidLogin)
//     .max(255, invalidLogin)
//     .required('Password is Required'),
// })
// export const changePasswordSchema = yup.object().shape({
//   newPassword: registerPasswordValidation,
// })
