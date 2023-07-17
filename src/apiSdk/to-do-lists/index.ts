import axios from 'axios';
import queryString from 'query-string';
import { ToDoListInterface, ToDoListGetQueryInterface } from 'interfaces/to-do-list';
import { GetQueryInterface } from '../../interfaces';

export const getToDoLists = async (query?: ToDoListGetQueryInterface) => {
  const response = await axios.get(`/api/to-do-lists${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createToDoList = async (toDoList: ToDoListInterface) => {
  const response = await axios.post('/api/to-do-lists', toDoList);
  return response.data;
};

export const updateToDoListById = async (id: string, toDoList: ToDoListInterface) => {
  const response = await axios.put(`/api/to-do-lists/${id}`, toDoList);
  return response.data;
};

export const getToDoListById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/to-do-lists/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteToDoListById = async (id: string) => {
  const response = await axios.delete(`/api/to-do-lists/${id}`);
  return response.data;
};
