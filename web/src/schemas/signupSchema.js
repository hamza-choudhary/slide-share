import * as yup from 'yup';
const signupSchema = yup.object().shape({
    firstName:yup.string().min(3).required(),
    lastName:yup.string().min(3).required(),
    email:yup.string().email().required(),
    password:yup.string().min(8).required(),
    confirmPassword:yup.string().required().oneOf([yup.ref('password')])
})

export default signupSchema