import {useContext, useState} from 'react'
import {TodoGeneralContext} from '../context/TodoGeneralContext'

function AddTodo(){
    const [newTodo, setNewTodo] = useState ("")
    const anyname = useContext(TodoGeneralContext)
    return (
        <>
        <h1>My todo list</h1>
        <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
        <button onClick={() => anyname.setTodos(perv => [...perv, newTodo])}>Save Todo</button>
        </>
    )
}
export default AddTodo