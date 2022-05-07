import React from 'react'

const Input = ({query, setQuery, search}) => {
  return (
    <div className="w-52 max-w-sm  py-2 px-2 weather-input">
     <input 
        type="text"
        placeholder="Enter a city"
        onChange={e => setQuery(e.target.value)}
        value={query}
        onKeyPress={search}
        className="appearance-none bg-transparent border-b border-teal-500 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
     />
    </div>
  )
}

export default Input