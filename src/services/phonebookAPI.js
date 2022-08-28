import axios from 'axios';

axios.defaults.baseURL = 'https://6307f06e3a2114bac76e321e.mockapi.io';

export const getItems = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const addItem = async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};
export const deleteItem = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
