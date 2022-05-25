import axios from "axios";

// const BASE_URL = 'https://6214d67589fad53b1f20db5c.mockapi.io/contacts';
// const API_ENDPOINT = '/contacts';

axios.defaults.baseURL = "https://6214d67589fad53b1f20db5c.mockapi.io/contacts";

const fetchContacts = () => {
  return axios.get("/contacts").then((res) => res.data);
};

const addContact = (contactId, update) => {
  return axios.patch(`/contacts/${contactId}`, update).then(({ data }) => data);
};

export default { fetchContacts, addContact };

// export const getContacts = async () => {
//   const res = await axios.get(`${BASE_URL}${API_ENDPOINT}`);
//   return res.statusText === 'OK'
//     ? res.data
//     : Promise.reject(new Error(res.statusText));
// };

// export const addContact = async contact => {
//   const res = await axios.post(`${BASE_URL}${API_ENDPOINT}`, contact);

//   return res.statusText === 'Created'
//     ? res.data
//     : Promise.reject(new Error(res.statusText));
// };

// export const deleteContact = async id => {
//   const res = await axios.delete(`${BASE_URL}${API_ENDPOINT}/${id}`);
//   return res.statusText === 'OK'
//     ? res.data
//     : Promise.reject(new Error(res.statusText));
// };
