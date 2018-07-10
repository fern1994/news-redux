import {MODAL} from '../../constants/ActionTypes'

const modal = {
  open: false,
  data: []
}

export default function modalReducer(state=modal,action){
  switch(action.type){
    case MODAL.OPEN:
    return{
      ...state,
      open: true,
      data: action.data
    }
    case MODAL.CLOSE:
    return{
      ...state,
      open: false,
      data: []
    }
    default:
    return state
  }
}