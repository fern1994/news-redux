import * as type from '../../constants/ActionTypes';

const openAlert = (text) => ({
  type: type.ALERT.OPEN,
  payload: true,
  text: text
})

const closeAlert = () => ({
  type: type.ALERT.CLOSE,
  payload: false,
  text: ''
})

export const showAlert = (text) => async (dispatch) => {
  try{
    await dispatch(openAlert(text))
  }catch(error){
    console.log('ALERT_ACTION_SHOWALERT: ', error)
  }
}

export const hideAlert = () => async (dispatch) => {
  try{
    await dispatch(closeAlert())
  }catch(error){
    console.log('ALERT_ACTION_HIDEALERT: ', error)
  }
}

export const alertAction = {
  showAlert,
  hideAlert
}