import Layout from './components/Layout'
import TaskListContainer from './components/TaskListsContainer';
import ToDoHero from './components/ToDoHero';
import { useAuth } from './context/AuthContext';

function App() {
  const { globalUser, globalData, isLoading } = useAuth();
  const isAuthenticated = !!globalUser;
  // const isData = globalData && !!Object.keys(globalData || {}).length;

  return (
    <>
    {isLoading && <h2>Loading...</h2>}
      <Layout>
        {!isAuthenticated && <ToDoHero />}
        {isAuthenticated && <TaskListContainer />}
      </Layout>
    </>
  )
}

export default App
