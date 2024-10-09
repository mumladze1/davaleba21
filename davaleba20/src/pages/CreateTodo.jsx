import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodoAction } from "../store/todo/todo.actions"
import { Link } from "react-router-dom"

 const CreateTodoPage = ()=>{
    
    const dispatch= useDispatch(addTodoAction)
    const [value,setValue]= useState('')
    const onSubmit = (e)=>{
        e.preventDefault(value)
        dispatch()

    }
    return <form onSubmit={onSubmit}>
        <input type="text" value={value} onChange={e =>setValue(e.target.value)}/>
        <button>Submit</button>
        <Link to={'/'}>To List</Link>
    </form>
 
 }

 export default CreateTodoPage