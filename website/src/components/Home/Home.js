import React, { useReducer } from 'react'
import { reducer } from '../../reducers/todoReducer';
import { initialTodos } from '../../shared/todos';

export const Home = () => {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  const handleDelete = (todo) => {
    let action = { type: "DELETE", payload: { id: todo.id } }
    dispatch(action);
  }

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            <span style={ todo.complete ? { textDecoration: 'line-through' } : {}}>
              {todo.title}
            </span>
            <button onClick={() => handleDelete(todo)}>
              Delete
            </button>
          </label>
        </div>
      ))}
    </>
  );
}
