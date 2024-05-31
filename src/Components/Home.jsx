import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToDos, removeToDos, completeTodos } from '../Redux/slice';

const Home = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState('');
  const [showCompleted, setShowCompleted] = useState(false);
  const mytodos = useSelector(state => state.todoReducer);
  console.log(mytodos);

  const handleAdd = () => {
    if (todo === '') {
      alert('Empty todo cannot be added!');
    } else {
      dispatch(addToDos(todo));
      setTodo('');
      alert('New todo added to your list!');
    }
  };

  const toggleCompleted = () => {
    setShowCompleted(!showCompleted);
  };

  return (
    <div style={{ minHeight: '100vh' }} className="w-100 container-fluid justify-content-center align-items-center bg-primary">
      <h1 className="py-5 text-center text-warning">TO-DO APP</h1>
      <div className="rounded d-flex">
        <input
          type="text"
          value={todo}
          className="w-75 rounded form-control m-5"
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button onClick={handleAdd} className="btn btn-success my-5">
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
 
      <div className='justify-content-center align-items-center mx-5'>
        <ol className='text-light'>
          {mytodos?.length > 0 ? (
            mytodos?.map(todos => (
              (showCompleted || !todos.completed) && (
                <li key={todos?.id}
                  style={{ textDecorationLine: todos.completed ? 'underline' : 'none' }} >
                  <span>{todos?.text}</span>
                  <button
                    onClick={() => dispatch(completeTodos(todos?.id))}
                    className="btn btn-success mx-2 my-3">
                    {todos?.completed ? 'Undo' : 'Complete'}
                  </button>
                  <button onClick={() => dispatch(removeToDos(todos?.id))} className="btn btn-danger my-3">
                    Remove
                  </button>
                </li>
              )
            ))
          ) : (
            <div className="mt-5">
              <h1 className="text-center text-danger">Your To-Do List is Empty!!!</h1>
            </div>
          )}
        </ol>
      </div>
      <button onClick={toggleCompleted} className="btn btn-info mb-3">
        {showCompleted ? 'Hide Completed Todos' : 'Show Completed Todos'}
      </button>
    </div>
  );
};

export default Home;
