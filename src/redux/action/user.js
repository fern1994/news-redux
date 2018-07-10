import { Service } from '../../service';

export const createUser = async (data)  => {
  console.log('action',data)
  try{
    await Service.User.addUser(data)
  }catch(error){
    console.log('ERROR USER_ACTION: ', error)
  }
}
export const userAction = {
  createUser
}