import TaskCard from "./TaskCard";
import TaskInput from "./TaskInput";
type Task = {
  title: string;
  description: string;
  isDone: boolean;
};
type TaskListProps = {
    list: Task[],
    handleAddTask: (listIndex:number, task: Task,) => void,
    listIndex: number,
    handleDeleteList: (listIndex:number) => void,
    handleDeleteTask: (listIndex:number, taskIndex:number) => void
};

export default function TaskList({list, handleAddTask, listIndex, handleDeleteList, handleDeleteTask}: TaskListProps) {
  return (
    <div className="border-solid border-4 flex flex-col gap-2">
      <div>
      {list.map((task, taskIndex)=>{
        return (
          <div>
          <TaskCard key={taskIndex} task={task} />
          <button onClick={()=>{
            if(handleDeleteTask) {
              handleDeleteTask(listIndex, taskIndex)
            }
          }}>Delete Task</button>
          </div>
        )
      })}
      </div>
      <TaskInput listIndex={listIndex} handleAddTask={handleAddTask} />
      <button onClick={()=>{
        if(handleDeleteList) {
          handleDeleteList(listIndex)
        }
      }}>Delete List</button>
    </div>
  );
}
