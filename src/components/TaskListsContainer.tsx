import { useState } from "react";
import TaskList from "./TaskList";
import TaskListInput from "./TaskListInput";

type Task = {
  title: string;
  description: string;
  isDone: boolean;
};
export default function TaskListContainer() {
  const [taskLists, setTaskLists] = useState<Task[][]>([
    [{ title: "Task 1", description: "First task", isDone: false }],
  ]);
  function handleAddList(list: Task[]) {
    const newTaskLists = [...taskLists];
    newTaskLists.push(list);
    setTaskLists(newTaskLists);
  }
  function handleAddTask(listIndex: number, task: Task) {
    const newTaskLists = [...taskLists];
    newTaskLists[listIndex].push(task);
    setTaskLists(newTaskLists);
  }
  function handleDeleteList(listIndex: number) {
    const newTaskLists = [...taskLists];
    newTaskLists.splice(listIndex, 1)
    setTaskLists(newTaskLists);
  }
  function handleDeleteTask(listIndex:number, taskIndex: number) {
    const newTaskLists = [...taskLists];
    newTaskLists[listIndex].splice(taskIndex, 1)
    setTaskLists(newTaskLists);
  }
  function handleFinishTask(listIndex:number, taskIndex: number) {
    const newTaskLists = [...taskLists];
    newTaskLists[listIndex][taskIndex].isDone = true
    setTaskLists(newTaskLists);
  }
  function handleEditTask(listIndex:number, taskIndex: number, taskTitle:string, taskDescription:string) {
    const newTaskLists = [...taskLists];
    newTaskLists[listIndex][taskIndex].title=taskTitle
    newTaskLists[listIndex][taskIndex].description=taskDescription
    setTaskLists(newTaskLists);
  }
  return (
    <div className="flex flex-col gap-4">
      <TaskListInput handleAddList={handleAddList} />
      <div className="flex flex-col gap-2">
        {taskLists.map((list, listIndex) => {
          return (
            <TaskList
              key={listIndex}
              list={list}
              handleAddTask={handleAddTask}
              listIndex={listIndex}
              handleDeleteList={handleDeleteList}
              handleDeleteTask={handleDeleteTask}
              handleFinishTask={handleFinishTask}
              handleEditTask={handleEditTask}
            />
          );
        })}
      </div>
    </div>
  );
}
