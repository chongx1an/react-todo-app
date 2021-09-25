import './App.css';
import React, { useState, useRef } from 'react'

function App() {

  const [todos, setTodos] = useState([
    {
      name: "Hello",
      isCompleted: true
    },
    {
      name: "World",
      isCompleted: false
    }
  ])

  const inputRef = useRef("")

  function handleOnChange(event) {

    const newTodos = [...todos];

    const todo = newTodos[event.target.name]
    todo.isCompleted = !todo.isCompleted

    setTodos(newTodos)

  }

  function addTodo() {

    const newTodos = [...todos];
    console.log(inputRef.current.value)
    if (!inputRef.current.value) return;

    newTodos.push({
      name: inputRef.current.value,
      isCompleted: false
    })

    setTodos(newTodos)

  }

  return (
    <div className="flex flex-col items-center">

      <div className="p-10">
        {todos.sort((a, b) => a.isCompleted - b.isCompleted).map((todo, index) => {
          return <div key={index} className="flex items-center">

            <input
              className="border-2 border-gray-100 rounded py-1 px-2 mr-2"

              name={index}
              type="checkbox"
              checked={todo.isCompleted}
              onChange={handleOnChange} />
            <p>{todo.name}</p>

          </div>
        })}
      </div>


      <div>
        <input className="border-2 border-gray-100 rounded py-1 px-2 mx-5" ref={inputRef} type="text"></input>
        <button class="px-6 py-2 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer" onClick={addTodo}>Add</button>
      </div>
    </div >
  );
}

export default App;
