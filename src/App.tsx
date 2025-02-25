import { useState } from 'react';
import Layout from './components/Layout'
import TaskListContainer from './components/TaskListsContainer';
import ToDoHero from './components/ToDoHero';
import { useAuth } from './context/AuthContext';
type Task = {
  title: string;
  description: string;
  isDone: boolean;
};

function App() {
  const [taskLists, setTaskLists] = useState<Task[][]>([
      [{ title: "Task 1", description: "First task", isDone: false }],
    ]);
  const { globalUser, globalData, isLoading } = useAuth();
  const isAuthenticated = !!globalUser;
  // const isData = globalData && !!Object.keys(globalData || {}).length;

  return (
    <>
    {isLoading && <h2>Loading...</h2>}
      <Layout taskLists={taskLists}  setTaskLists={setTaskLists}>
        {!isAuthenticated && <ToDoHero />}
        {isAuthenticated && <TaskListContainer taskLists={taskLists}  setTaskLists={setTaskLists}/>}
      </Layout>
    </>
  )
}

export default App
