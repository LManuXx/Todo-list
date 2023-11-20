import { useTasks } from "../context/TaskContext";

const TaskCard = ({ task }) => {

  const {deleteTask} = useTasks();

  return (
    <div className="bg-zinc-700 p-4 rounded-lg shadow-md m-7 max-w-md">
      <h3 className="text-xl font-semibold mb-2 text-white">{task.title}</h3>
      <p className="text-white">{task.description}</p>
      <div className="flex justify-center mt-4 space-x-4">
        <button className="btn-edit">Editar</button>
        <button className="btn-delete" onClick={deleteTask(task._id)}>Borrar</button>
      </div>
    </div>
  );
};

export default TaskCard;
