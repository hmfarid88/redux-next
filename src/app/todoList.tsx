"use client"
import React from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { addTodo, removeTodo, toggleTodo } from '../store/todoSlice';

const TodoList: React.FC = () => {
  const todos = useAppSelector(state => state.todos.todos);
  const dispatch = useAppDispatch();

  const handleAddTodo = () => {
    const newTodo = {
      id: Math.random().toString(36).substr(2, 9),
      text: 'New Todo',
      completed: false,
    };
    dispatch(addTodo(newTodo));
  };

  const handleToggleTodo = (id: string) => {
    dispatch(toggleTodo(id));
  };

  const handleRemoveTodo = (id: string) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center">
        <p className='font-bold p-5'>WELCOME TO MY REDUX PROJECT</p>
        <p className='text-center'>Used Technology : Next.js, TypeScript, Redux-toolkit, Tailwind css</p>
      </div>
      <div className='flex flex-col gap-5 items-center justify-center p-10'>
        <div className='card'>
          <button className='p-2 border bg-cyan-500 rounded-md' onClick={handleAddTodo}>Add Todo</button>
        </div>
        <div className='card border rounded-md'>
          <table className='w-full p-5'>
           
              {todos?.map(todo => (
                <tr key={todo.id} className='gap-5 border'>
                  <td onClick={() => handleToggleTodo(todo.id)} className='px-2 text-purple-600'>{todo.text} </td>
                  <td><button className='bg-purple-500 p-2 rounded-lg' onClick={() => handleRemoveTodo(todo.id)}>Remove</button></td>
                </tr>
              ))}
           
          </table>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
