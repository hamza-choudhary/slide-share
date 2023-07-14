import axios from 'axios'

export const loginRequest = (data , thenBody , catchBody)=>{
    axios.post('/api/login',data).then(thenBody).catch(catchBody)
}
export const signupRequest = (data , thenBody , catchBody)=>{
    axios.post('/api/signup',data).then(thenBody).catch(catchBody)
}