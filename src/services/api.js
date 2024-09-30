import axios from '../axiosConfig';
import awsConfig from "../aws-exports";

const API_URL = awsConfig.API.endpoints[0].endpoint;

export const getTodos = (status = '') => {
    if (status) {
        return axios.get(API_URL + '/todos', { params: { status: status } });
    }

    return axios.get(API_URL + '/todos');
};
export const getTodo = (id) => axios.get(`${API_URL}/todos/${id}`);
export const createTodo = (todo) => axios.post(API_URL + '/todos', todo);
export const updateTodo = (id, todo) => axios.put(`${API_URL}/todos/${id}`, todo);
export const deleteTodo = (id) => axios.delete(`${API_URL}/todos/${id}`);
