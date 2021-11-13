import {} from "react";
import FormTask from "./FormTask";
import ListTasks from "./ListTasks";

const Task = () => {
  return (
    <div>
      <div className="bg-gray-800 text-gray-100 px-4 py-2">
        <span className="text-2xl">Simple Task</span>
      </div>

      <FormTask />

      <span className="mx-4 font-semibold">List Task</span>
      <ListTasks />
      <div className="my-10"></div>
      <div className="fixed bottom-0 w-full text-center bg-gray-300">
        <span className="text-xs text-white">Powered by Momo Creative</span>
      </div>
    </div>
  );
};

export default Task;
