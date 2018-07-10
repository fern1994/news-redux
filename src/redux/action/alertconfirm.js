import * as type from '../../constants/ActionTypes';

const openAlertConfirm = (text) => ({
  type: type.ALERTCONFIRM.OPEN,
  payload: true,
  text: text
})

const closeAlertConfirm = () => ({
  type: type.ALERTCONFIRM.CLOSE,
  payload: false,
  text: ''
})

export const showAlertConfirm = (text) => async (dispatch) => {
  try{
    await dispatch(openAlertConfirm(text))
  }catch(error){
    console.log('ALERTCONFIRM_ACTION_SHOWALERTCONFIRM: ', error)
  }
}

export const hideAlertConfirm = () => async (dispatch) => {
  try{
    await dispatch(closeAlertConfirm())
  }catch(error){
    console.log('ALERTCONFIRM_ACTION_HIDEALERTCONFIRM: ', error)
  }
}

export const alertconfirmAction = {
  showAlertConfirm,
  hideAlertConfirm
}