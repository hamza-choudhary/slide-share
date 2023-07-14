import * as yup from 'yup'

const updateSchema = yup.object().shape({
    firstName:yup.string().min(3).required(),
    lastName:yup.string().min(3).required(),
    email:yup.string().email().required(),
    about:yup.string().max(255).min(150)
    
})
export default updateSchema