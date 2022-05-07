import React from "react";
import EachTodo from "./EachTodo";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div>
      <ul className="list-disc font1">
        {todos.map((todo) => (
          <EachTodo
            todos={todos}
            setTodos={setTodos}
            key={todo.id}
            text={todo.text}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
