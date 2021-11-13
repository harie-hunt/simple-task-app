import { Auths, Tasks } from "../../components";
import { useApiContext } from "../../contexts/ApiContext";
import TaskProvider from "../../contexts/TaskContext";

const Dashboard = () => {
  const { isAuth } = useApiContext();

  return (
    <>
      {isAuth ? (
        <TaskProvider>
          <Tasks />
        </TaskProvider>
      ) : (
        <Auths />
      )}
    </>
  );
};

export default Dashboard;
