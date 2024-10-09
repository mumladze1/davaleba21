import { todoReducer } from "./todo/todo.reducers";

const { configureStore, combineReducers } = require("@reduxjs/toolkit");

const rootReucer= combineReducers ({
    todo: todoReducer
})



const store= configureStore ({
 reducer:rootReucer,
})


export default store