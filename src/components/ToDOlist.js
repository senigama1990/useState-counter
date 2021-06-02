import React from 'react'
import DeleteToDo from "./DeleteToDo";

function ToDOlist(props) {
    function handleToggle(todo) {
        const updatedTodos = props.todos.map((eachtodo) => {
            if (eachtodo.id === todo.id) {
                return { ...eachtodo, done: !eachtodo.done }
            }
            return eachtodo
        })
        props.setTodoes(updatedTodos)
    }
    return (
        <ul>
            {props.todos.map((todo) => {
                return <li style={{ textDecoration: todo.done ? "line-through" : "" }} className='todoItem' key={todo.id}>
                    {todo.text}
                    <div>
                        <button onClick={() => handleToggle(todo)}><i className="fa fa-check-square" aria-hidden="true"></i></button>
                        <DeleteToDo setTodoes={props.setTodoes} todo={todo}/>
                    </div>
                </li>
            })}
        </ul>
    ) 
}
export default ToDOlist
