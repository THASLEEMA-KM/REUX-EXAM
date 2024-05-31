import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addToDos: (state, action) => {
        state.push({ id: Date.now(), text: action.payload, completed: false });
      },
      completeTodos: (state, action) => {
        const todo = state.find(todo => todo.id === action.payload);
        if (todo) {
          todo.completed = !todo.completed;
        }
      },
      
      removeToDos: (state, action) => {
        return state.filter(todo => todo.id !== action.payload);
      },

    //   completeTodos: (state, action) => {
    //     return state.map((todo) => {
    //       if (todo.id == action.payload) {
    //         return {
    //           ...todo, 
    //           completed: true,
    //         };
    //       }
    //       return todo;
    //     });
    //   },
    },
  });
export const {addToDos,removeToDos,completeTodos} = todoSlice.actions
export default todoSlice.reducer
