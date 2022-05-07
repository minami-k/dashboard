import React, { useState, useEffect } from 'react'
import Input from './Input'
import TodoList from './TodoList'
import "./todo.css"

const ToDo = () => {
    const [input, setInput] = useState("")
    const [todos, setTodos] = useState(() => {
        const saveTodos = localStorage.getItem("todoList")
        if(saveTodos){
            return JSON.parse(saveTodos)
        }else{
            return []
        }
    
    })


    useEffect(() => {
        const json = JSON.stringify(todos)
        localStorage.setItem("todoList", json)
    }, [todos])



  return (
    <div className='p-12 '>
        <h2 className='text-2xl font-semibold font1'>Today's tasks</h2>
        <Input input={input} setInput={setInput} todos={todos} setTodos={setTodos}/>
        <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default ToDo