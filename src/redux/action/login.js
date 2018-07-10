import * as type from '../../constants/ActionTypes'
import { Service } from '../../service';

const setAuth = (data) => ({
  type: type.LOGIN.SET,
  payload: data.id
})

const failAuth = () => ({
  type: type.ALERT.OPEN,
  payload: true,
  text: 'Username or Password incorrect'
})

const checkAuth = (userId) => ({
  type: type.LOGIN.SET,
  payload: userId
})

export const login = (data,history) => async (dispatch) => {
  try {
    const response = await Service.Login.login(data)
    if(response){
      dispatch(setAuth(response.data))
      localStorage.setItem("userId",response.data.id)
      history.push('/admin/home')
    }else{
      dispatch(failAuth())
    }
    
  } catch (error) {
    console.log("ACTION_LOGIN: ", error)
  }
}

export const checkLogin = () => async (dispatch) => {
  try{
    const userId = await JSON.parse(localStorage.getItem("userId"))
    dispatch(checkAuth(userId))
  }catch(error){
    console.log("ACTION_CHECKLOGIN: ", error)
  }
}

export const loginAction = {
  login,
  checkLogin
}