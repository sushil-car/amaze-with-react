export const ADD = 'ADD';

let nextTodoId = 0;

export const addTodo = (text) => ({
  type: ADD,
  id: nextTodoId++,
  text
});

export const setName = (name) => {
  return {type: "SET_NAME", text: name.text};
}

export const clearAll = () => {
  return {type: "CLEAR_ALL"};
}



