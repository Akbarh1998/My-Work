import { useState } from 'react';

function Todos() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim() === '') return;
    setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
    setTask('');
  };

  const deleteTask = id => {
    setTodos(todos.filter(t => t.id !== id));
  };
  return (
    <div className=" bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">📝 To-Do App</h1>

      <ul className="w-full max-w-md space-y-3 mb-5">
        {todos.map(t => (
          <li
            key={t.id}
            className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm"
          >
            {t.text}

            <button
              onClick={() => deleteTask(t.id)}
              className="text-red-500 hover:text-red-700"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={task}
          onChange={e => setTask(e.target.value)}
          placeholder="Enter a task..."
          className="border border-gray-300 rounded-lg px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Todos;
