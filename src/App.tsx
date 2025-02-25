import Layout from './components/Layout'
import TaskListContainer from './components/TaskListsContainer';
import ToDoHero from './components/ToDoHero';

function App() {
  // const { globalUser, globalData, isLoading } = useAuth();
  // const isAuthenticated = globalUser;
  const isAuthenticated = true
  // const isData = globalData && !!Object.keys(globalData || {}).length;

  return (
    <>
    {/* {isLoading && <h2>Loading...</h2>} */}
      <Layout>
        {!isAuthenticated && <ToDoHero />}
        {isAuthenticated && <TaskListContainer />}
      </Layout>
    </>
  )
}

export default App
