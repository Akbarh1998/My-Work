import React, { useState } from 'react'
import { RiDeleteBinLine } from "react-icons/ri";
function Todo() {
const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
const handlingInputValue = (e) =>{
    setTask(e.target.value)
}
const addTask = () =>{
    if(task.trim() === "") return;
    setTodos([...todos, {id: Date.now(), text: task, completed: false}]);
    setTask("");
};
const deleteTask = (id) =>{
    setTodos(todos.filter((t) => t.id !== id))
}
console.log(todos)
  return (
    <>
        <div className='m-auto w-[560px]'>
            <h1 className='text-center text-2xl m-5'>Todo App</h1>
            <div className='text-center'>
                <input value={task} onChange={handlingInputValue}
                
                className='border-1 border-gray-200 py-1 px-5 bg-white rounded-md w-[300px] focus:ring-2 focus:ring-blue-500 focus:outline-0' type="text" placeholder='Enter Your Task' />
                <button onClick={addTask}
                 className='bg-blue-500 py-1 px-3 ml-2 rounded-md text-white cursor-pointer'>Add</button>
            </div>
            <ul>
                {todos.map((t) =>(
                    <li key={t.id}
                    className='flex bg-gray-100 p-3 justify-between items-center rounded-md my-2 shadow-sm'
                    >{t.text}
                    <button  onClick={() => deleteTask(t.id)}
                     className='text-white py-1 px-2 bg-red-500 rounded-md cursor-pointer flex justify-center items-center gap-1'>Delete <RiDeleteBinLine /> </button>
                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default Todo;