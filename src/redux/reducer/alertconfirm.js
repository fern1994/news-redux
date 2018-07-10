import { ALERTCONFIRM } from '../../constants/ActionTypes';

const alertComfirm = {
  open: false,
  text: ''
}

export default function alertReducer(state=alertComfirm,action){
  switch(action.type){
    case ALERTCONFIRM.OPEN:
    return{
      ...state,
      open: action.payload,
      text: action.text
    } 
    case ALERTCONFIRM.CLOSE:
    return{
      ...state,
      open: action.payload,
      text: action.text
    }
    default:
    return state
  }
}