import { createContext, useContext, useEffect, useState } from "react";
import Axios from "axios";
import { useApiContext } from "./ApiContext";
import { Message, Loading } from "../atoms";

export const TaskContext = createContext();
export const useTaskContext = () => {
  return useContext(TaskContext);
};
export const API_TASK_URL = import.meta.env.VITE_API_URL + "/tasks";

const TaskProvider = ({ children }) => {
  // ApiContext
  const { AXIOS_OPT } = useApiContext();

  // State
  const [tasks, setTasks] = useState([]);
  const [isLoading, setisLoading] = useState();
  const [message, setMessage] = useState({ error: null, msg: null });

  const HandleMessage = {
    success: (msg) => {
      setMessage({ error: false, msg: msg });
    },
    failed: (msg) => {
      setMessage({ error: true, msg: msg });
    },
  };

  const ApiTask = {
    getTasks: async () => {
      setisLoading(true);

      try {
        const res = await Axios.get(API_TASK_URL, AXIOS_OPT);
        setTasks(res.data);
        HandleMessage.success("Menampilkan tasks");
      } catch (err) {
        if (err) {
          HandleMessage.failed(err.response.data);
        }
      } finally {
        setisLoading(false);
      }
    },

    addTask: async (body) => {
      setisLoading(true);

      try {
        const res = await Axios.post(API_TASK_URL, body, AXIOS_OPT);
        console.log("Add -> ", res.data.title);
        setTasks((cur) => [res.data, ...cur]);
        HandleMessage.success("Berhasil tambah task");
      } catch (err) {
        if (err) {
          HandleMessage.failed(err.response.data);
        }
      } finally {
        setisLoading(false);
      }
    },

    updateTask: async (id, completed) => {
      setisLoading(true);
      try {
        const res = await Axios.put(
          API_TASK_URL + "/" + id,
          { completed },
          AXIOS_OPT
        );
        console.log("Update -> ", res.data);
        setTasks((cur) => {
          return cur.map((task) => {
            if (task._id == id) {
              task.completed = completed;
            }
            return task;
          });
        });
        HandleMessage.success("Berhasil update task");
      } catch (err) {
        if (err) {
          HandleMessage.failed(err.response.data);
        }
      } finally {
        setisLoading(false);
      }
    },

    deleteTask: async (id, title) => {
      // confirm first
      const yakin = confirm("Apakah anda yakin akan menghapus ?");
      if (!yakin) return true;
      //
      setisLoading(true);
      try {
        const res = await Axios.delete(API_TASK_URL + "/" + id, AXIOS_OPT);
        console.log("Deleted -> ", res.data);
        setTasks((cur) => {
          return cur.filter((task) => {
            return task._id != id;
          });
        });
        HandleMessage.success(res.data);
      } catch (err) {
        if (err) {
          HandleMessage.failed(err.response.data);
        }
      } finally {
        setisLoading(false);
      }
    },
  };

  useEffect(() => {
    setTimeout(() => {
      ApiTask.getTasks();
    }, 1000);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        ApiTask,
        message,
        setMessage,
      }}
    >
      {isLoading && <Loading />}

      <Message />

      <>{children}</>
    </TaskContext.Provider>
  );
};

export default TaskProvider;
