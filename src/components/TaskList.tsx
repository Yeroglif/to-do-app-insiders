import TaskCard from "./TaskCard";
type Task = {
  title: string;
  description: string;
  isDone: boolean;
};
type TaskListProps = {
    list: Task[]
};

export default function TaskList({list}: TaskListProps) {
  return (
    <div>
      {list.map((task, taskIndex)=>{
        return (
          <TaskCard key={taskIndex} task={task} />
        )
      })}
    </div>
  );
}
