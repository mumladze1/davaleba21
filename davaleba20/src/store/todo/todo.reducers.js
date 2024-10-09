const initialState = {

    todolist: [],
}

export const todoReducer= ( state=initialState, action ) =>{
    switch (action.type) {
        case 'ADD_TODO':
          return { todolist:[...state.todolist, action.payload] }
        default:
          return state
      }
    
   }


