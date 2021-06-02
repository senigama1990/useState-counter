import React, { useRef } from 'react'

function AddToDO(props) {
    const inputRef = useRef()
    function handleAddtodo(e) {
        e.preventDefault()
        const text = e.target.elements.input.value

        // if (text !==0) 

        if (text) {
            console.log(inputRef.current)
            const newToDo = { id: new Date(), text: text, done: false }
            props.setTodoes((todos) => {
                return [...todos, newToDo]
            })
            inputRef.current.value = ""
        } 
    }
    return (
        <form className='form' onSubmit = {handleAddtodo}>
            <input ref={inputRef} className='input' name = 'input'  type="text" />
            <button className='add-btn' type="submit">
                <i className="fa fa-plus" aria-hidden="true"></i>
            </button>
        </form>
    )
}

export default AddToDO