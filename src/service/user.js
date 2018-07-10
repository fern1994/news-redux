import { setting } from './setting';

export default {
  addUser: async (data) => {
    console.log("service", data)
    try {
      return await setting().then(async (call) => call.post(`/user/`, data))
    } catch (error) {
      console.log('SERVICE_ADDUSER: ',error)
    }
  }
}