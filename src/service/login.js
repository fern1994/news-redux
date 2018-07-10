import { setting } from './setting';

export default {
  login: async (data) => {
    try {
      return await setting().then((call) => call.post('/user/auth',data))
    } catch (error) {
      console.log("SEVICE_LOGIN: ", error)
    }
  }
}