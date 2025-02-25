import TaskList from "./TaskList";
type ToDoHeroProps = {};
export default function ToDoHero({}: ToDoHeroProps) {
  return (
    <div className="h-screen flex flex-col gap-20">
      <div>
        <h2>Welcome to the to do list</h2>
        <p>Your main go-to site to help organize your life</p>
      </div>
      <div>
        <TaskList
          list={[
            {
              title: "Gym",
              description: "Go to the gym",
              isDone: false,
            },
          ]}
          listIndex={0}
        />
        <p>The task list is not playable unless you log in or sign up</p>
      </div>
    </div>
  );
}
