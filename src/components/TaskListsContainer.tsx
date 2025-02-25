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
//   setTaskLists([
//     ...taskLists,
//     [
//       {
//         title: "New Task",
//         description: "A new task description",
//         isDone: false,
//       },
//     ],
//   ]);
  return (
    <div className="flex flex-col gap-4">
        <TaskListInput setTaskLists={setTaskLists}/>
      <div>
      {taskLists.map((list, listIndex) => {
          return <TaskList key={listIndex} list={list} />;
        })}
        </div>
    </div>
  );
}
