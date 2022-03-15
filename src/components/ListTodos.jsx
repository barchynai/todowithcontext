import {useContext} from 'react'
import {TodoGeneralContext} from '../context/TodoGeneralContext'

function ListTodos(){
    const {todos, deleteTodo} = useContext(TodoGeneralContext)
    return (
        <div>
            <ul>
                {todos.map((todo, index) =>{
                    return (<li>{todo} <button onClick={() => deleteTodo(index)}>Delete</button></li>)
                })}
            </ul>
        </div>
    )
}
export default ListTodos