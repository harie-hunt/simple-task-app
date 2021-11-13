import { Auths, Tasks } from "../../components";
import { useApiContext } from "../../contexts/ApiContext";
import TaskProvider from "../../contexts/TaskContext";

const Dashboard = () => {
  const { isAuth } = useApiContext();

  return (
    <div className="min-h-screen bg-gray-200">
      {isAuth ? (
        <TaskProvider>
          <Tasks />
        </TaskProvider>
      ) : (
        <Auths />
      )}
    </div>
  );
};

export default Dashboard;
