import React from 'react'

function DeleteToDo({ setTodoes, todo }) {
    const handleDelete = (todo) => {
        const confirmed = window.confirm("Haqqatan ham o'chirasizmi?")
        if (confirmed) {
            setTodoes(prevToDos => {
                return prevToDos.filter(eachtodo => eachtodo.id !== todo.id)
            })
        }
    }
    return (
        <button onClick = {()=>handleDelete(todo)}><i className="fa fa-trash" aria-hidden="true"></i></button>
    )
}

export default DeleteToDo
