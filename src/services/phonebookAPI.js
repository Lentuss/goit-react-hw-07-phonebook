import axios from 'axios';

axios.defaults.baseURL = 'https://6307f06e3a2114bac76e321e.mockapi.io';

export const getItems = async () => {
  const { data } = await axios.get('/contacts');
  console.log('get items');
  // console.log(data);
  return data;
};

export const addItem = async contact => {
  const { data } = await axios.post('/contacts', contact);
  console.log(data);
  console.log('add item');
  return data;
};
export const deleteItem = async id => {
  const resp = await axios.delete(`/contacts/${id}`);
  console.log('del item');
  const deleted = await resp.data;
  const response = await getItems();
  console.log(response);
  const data = await response;
  console.log(data);
  return data;
};
