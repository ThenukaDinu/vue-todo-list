import axios from 'axios';

export default {
  fetchTodos() {
    return axios.get('todos').then((res) => res);
  },

  fetchTodo(id) {
    return axios.get(`todos/${id}`).then((res) => res);
  },

  addTodo(todo) {
    return axios.post('todos', todo).then((res) => res);
  },

  removeTodo(id) {
    return axios.delete(`todos/${id}`).then((res) => res);
  },

  updateTodo(todo) {
    return axios.put('todos', todo);
  },
};
