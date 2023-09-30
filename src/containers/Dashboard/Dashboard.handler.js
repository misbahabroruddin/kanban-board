import axios from 'axios';
import config from '../../constants';

const { BASE_URL } = config;

const fetch = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/tasks`);
    return await data;
  } catch (e) {
    console.log(e);
  }
};

const createTask = async (formValues) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/tasks`, formValues);
    return await data;
  } catch (e) {
    console.log(e);
  }
};

const updateStatus = async (id, payload) => {
  try {
    const { data } = await axios.patch(`${BASE_URL}/tasks/${id}`, payload);
    return await data;
  } catch (e) {
    console.log(e);
  }
};

const deleteTask = async (id) => {
  try {
    const { data } = await axios.delete(`${BASE_URL}/tasks/${id}`);
    return await data;
  } catch (e) {
    console.log(e);
  }
};

const fetchById = async (id) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/tasks/${id}`);
    return data;
  } catch (e) {
    console.log(e);
  }
};

const updateTask = async (id) => {
  try {
    const { data } = await axios.put(`${BASE_URL}/tasks/${id}`);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export default {
  fetch,
  createTask,
  updateStatus,
  deleteTask,
  fetchById,
  updateTask,
};
