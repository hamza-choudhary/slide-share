import {createReducer} from '@reduxjs/toolkit'
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const initialState = {
    myTheme:cookies.get('theme')?true:false,
    userData:undefined,
}
export const customReducer = createReducer(initialState,{
    changeTheme:(state,action)=>{
        state.myTheme = !state.myTheme
        state.myTheme?cookies.set('theme', state.myTheme, { path: '/' }):cookies.remove('theme')
    },
    setUser:(state , action)=>{
        state.userData = action.payload
    },
    
})