import React from 'react'

const Input = ({input, setInput, todos, setTodos}) => {

const inputHandler = (e) => {
    setInput(e.target.value)
}

const submitHandler = (e) => {
    e.preventDefault()
    setTodos([
        ...todos, {text: input, completed: false, id:Math.random()*10000 }
    ])
    setInput("")
}

  return (
    <div>
        <form onSubmit={submitHandler} className="flex w-full max-w-sm  border-b border-teal-500 py-2 px-2">
            <input type="text" onChange={inputHandler} value={input} placeholder="Add to-do" className="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none"/>
            <button type='submit' className='flex-shrink-0 bg-rose-300 hover:bg-rose-400 border-red-300 hover:border-red-400 text-sm border-4 text-white py-1 px-2 rounded'>Add</button>
        </form>
    </div>
  )
}

export default Input