import { nanoid, createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "re-create-todo" }],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
            );
        },
        updateTodo: (state, action) => {
            const {id, text} = action.payload
            const result = state.todos.find((todo) => todo.id === id)
            if(result){
                result.id = id
                result.text = text

            }
        },
    },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;

// import { createSlice, nanoid } from "@reduxjs/toolkit";

// const initialState = {
//     todos: [{ id: 1, text: "Todo App in Rudex Tool Kit" }],
// };

// export const todoSlice = createSlice({
//     name: "todo",
//     initialState,
//     reducers: {
//         addTodo: (state, action) => {
//             const todo = {
//                 id: nanoid(),
//                 text: action.payload,
//             };
//             state.todos.push(todo);
//         },
//         removeTodo: (state, action) => {
//             state.todos = state.todos.filter((todo) =>  todo.id !== action.payload);
//         },
//     },
// });

// export const { addTodo, removeTodo } = todoSlice.actions;

// export default todoSlice.reducer;
