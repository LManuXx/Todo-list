import {useForm} from 'react-hook-form';
import { useTasks } from '../context/TaskContext';
import { useNavigate } from 'react-router-dom';


export const TaskFormPage = () => {

    const {register, handleSubmit} = useForm();
    const {tasks, createTask} = useTasks();
    const nav = useNavigate();
    console.log(tasks);

    const onSubmit = handleSubmit((data)=>{
        createTask(data);
        nav('/tasks');
    })

  return (
    <div className="flex justify-center items-center h-screen">
    <div className="max-w-md w-full px-6 py-10 bg-zinc-800 rounded-lg shadow-lg">
      <h1 className="text-white text-4xl mb-6">Crear Tarea</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label className="block text-white text-lg mb-2" htmlFor="title">
            Título
          </label>
          <input
            {...register('title')}
            autoFocus
            type="text"
            id="title"
            name="title"
            placeholder="Escribe el título de la tarea"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
          />
        </div>
        <div className="mb-6">
          <label className="block text-white text-lg mb-2" htmlFor="description">
            Descripción
          </label>
          <textarea
            {...register('description')}
            id="description"
            name="description"
            placeholder="Escribe la descripción de la tarea"
            rows="4"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-gray-500 hover:bg-gray-400 text-white rounded-lg px-4 py-2 transition-colors duration-300 shadow-lg"
        >
          Crear Tarea
        </button>
      </form>
    </div>
  </div>
  )
}