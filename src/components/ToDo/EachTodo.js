import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faSquareCheck } from '@fortawesome/free-solid-svg-icons'

const EachTodo = ({ text, todos, setTodos, todo }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((i) => i.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((i) => {
        if (i.id === todo.id) {
          return {
            ...i,
            completed: !i.completed,
          };
        }
        return i;
      })
    );
  };

  return (
    <div className="flex justify-between max-w-sm mt-3 pl-5 text-xl">
      <li className={ `${todo.completed ? "completed" : ""}`}>{text}</li>
      <div>
      <button onClick={completeHandler} ><FontAwesomeIcon icon={faSquareCheck}/></button>
      <button onClick={deleteHandler} className="ml-2"><FontAwesomeIcon icon={faXmark}/></button>
      </div>
    </div>
  );
};

export default EachTodo;
