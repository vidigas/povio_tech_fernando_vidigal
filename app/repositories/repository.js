import axios from 'axios';

export const getUsers = () => {
  return axios.get(`/most-liked`);
};


// export const getPrices = (id, items) => {
//   return axios.put(`/customers/${id}/prices`, items);
// }