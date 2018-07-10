import * as type from '../../constants/ActionTypes';

const openModal = (data) => ({
  type: type.MODAL.OPEN,
  payload: true,
  data: data
})

const closeModal = () => ({
  type: type.MODAL.CLOSE,
  payload: false
})

export const showModal = (data) => async (dispatch) => {
  try{
    await dispatch(openModal(data))
  }catch(error){
    console.log('MODAL_ACTION_SHOWMODAL: ', error)
  }
}

export const hideModel = () => async (dispatch) => {
  try{
    await dispatch(closeModal())
  }catch(error){
    console.log('MODAL_ACTION_HIDEMODAL: ', error)
  }
}

export const modalAction = {
  showModal,
  hideModel
}