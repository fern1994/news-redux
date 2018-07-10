import { ALERT } from '../../constants/ActionTypes';

const alert = {
  open: false,
  text: ''
}

export default function alertReducer(state=alert,action){
  switch(action.type){
    case ALERT.OPEN:
    return{
      ...state,
      open: action.payload,
      text: action.text
    } 
    case ALERT.CLOSE:
    return{
      ...state,
      open: action.payload,
      text: action.text
    }
    default:
    return state
  }
}