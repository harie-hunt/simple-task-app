import { useState } from "react";
import {
  SvgAdjusmentsOutline,
  SvgCheckOutline,
  SvgPencilOutline,
  SvgTrashOutline,
} from "../../atoms/Svgs";
import { useTaskContext } from "../../contexts/TaskContext";
import { formatDistanceToNow } from "date-fns";

const ListTasks = () => {
  const { tasks, ApiTask } = useTaskContext();
  const [ActionID, setActionID] = useState();

  function handleCheck(id, toggle) {
    ApiTask.updateTask(id, !toggle);
    handleClickAction(id);
  }

  function handleClickAction(id) {
    ActionID == id ? setActionID() : setActionID(id);
  }

  function handleTrash(id, title) {
    ApiTask.deleteTask(id, title);
  }

  return (
    <ul className="p-4 space-y-2">
      {tasks.map((task) => (
        <li key={task._id}>
          <section
            className={`flex justify-between items-start p-4 ${
              task.completed ? "bg-green-200" : "bg-gray-50"
            }`}
          >
            <div>
              <div>{task.title}</div>
              <div className="text-xs text-gray-400">
                {task.completed && (
                  <span className="font-semibold">
                    <i>Completed - </i>
                  </span>
                )}
                <span>{formatDistanceToNow(new Date(task.updatedAt))}</span>
              </div>
            </div>
            <button
              className={
                ActionID == task._id ? "text-gray-700" : "text-gray-400"
              }
              onClick={() => handleClickAction(task._id)}
            >
              <SvgAdjusmentsOutline />
            </button>
          </section>

          {ActionID == task._id && (
            <div className="bg-gray-300 flex justify-around text-xs">
              <button
                className="w-full bg-green-400 p-2 flex flex-col items-center text-gray-200 space-y-1"
                onClick={() => handleCheck(task._id, task.completed)}
              >
                <SvgCheckOutline />
                <span>Check</span>
              </button>

              <button
                className="w-full bg-red-400 p-2 flex flex-col items-center text-gray-200 space-y-1"
                onClick={() => handleTrash(task._id, task.title)}
              >
                <SvgTrashOutline />
                <span>Trash</span>
              </button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ListTasks;
