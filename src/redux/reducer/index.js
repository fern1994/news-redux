import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { reducer as reduxFormReducer } from 'redux-form'

import News from './news';
import Modal from './modal';
import Alert from './alert';
import Login from './login';
import AlertConfirm from './alertconfirm';

// const loginStorageConfig = {
//   key: 'user',
//   storage: storage,
//   keyPrefix: '_',
//   version: 1,
//   keyPrefix: '_',
//   debug: true
// }

const rootReducer = combineReducers({
  form: reduxFormReducer,
  News,
  Modal,
  Alert,
  Login,
  AlertConfirm,
  // Login: persistReducer(loginStorageConfig,News)
})

export default rootReducer;