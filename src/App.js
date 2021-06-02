import { useState, useRef } from 'react'
import './App.css';
import AddToDO from './components/AddToDO'
import ToDOlist from './components/ToDOlist';

function App() {
    const [todos, setTodoes] = useState([
        { id: 1, text: "Do something", done: false },
        { id: 2, text: "Do nothing", done: false },
        { id: 3, text: "Do anything", done: false }
    ])
    return (
        <div className="App">
            <div className='AppBody'>
                <h1 className='title'>ToDo List</h1>
            </div>
            <AddToDO setTodoes={setTodoes}/>
            <ToDOlist todos={todos} setTodoes={setTodoes }/>
        </div>

    );
}

export default App;
