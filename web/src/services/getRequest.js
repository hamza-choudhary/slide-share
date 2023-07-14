import axios from 'axios'
export const aboutMeRequest = (thenBody , catchBody) =>{
    axios.get('/api/me').then(thenBody).catch(catchBody)
} 

export const logout = (thenBody , catchBody) =>{
    axios
      .get("/api/logout")
      .then(thenBody)
      .catch(catchBody);
}