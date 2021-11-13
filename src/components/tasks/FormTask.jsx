import { useState } from "react";
import { useTaskContext } from "../../contexts/TaskContext";

const FormTask = () => {
  const { ApiTask } = useTaskContext();

  // State
  const [form, setForm] = useState();

  function handleInputChange(e) {
    const input = e.target;
    setForm((cur) => ({ ...cur, [input.name]: input.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    ApiTask.addTask(form);
    e.target.reset();
  }

  return (
    <form className="flex p-4" onSubmit={handleSubmit}>
      <input
        className="p-2 w-full bg-gray-100 focus:bg-white focus:outline-none transition"
        type="text"
        name="title"
        placeholder="Tulis disini"
        onChange={handleInputChange}
      />
      <button className="p-2 bg-blue-500 text-white">Add</button>
    </form>
  );
};

export default FormTask;
