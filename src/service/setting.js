import axios from 'axios';

export const setting = async () => {
  return axios.create({
    baseURL : 'https://agile-cliffs-83142.herokuapp.com/api',
    
  })
}