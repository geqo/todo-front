import axios from 'axios';

const API_URL = 'https://kj8ib2n8eb.execute-api.us-east-1.amazonaws.com/prod/todos';

export const getTodos = (status = '') => {
    if (status) {
        return axios.get(API_URL, { params: { status: status } });
    }

    return axios.get(API_URL);
};
export const getTodo = (id) => axios.get(`${API_URL}/${id}`);
export const createTodo = (todo) => axios.post(API_URL, todo);
export const updateTodo = (id, todo) => axios.put(`${API_URL}/${id}`, todo);
export const deleteTodo = (id) => axios.delete(`${API_URL}/${id}`);
