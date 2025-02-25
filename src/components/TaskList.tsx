import { useState } from "react";
import TaskCard from "./TaskCard";
import TaskInput from "./TaskInput";
import TaskEdit from "./TaskEdit";
type Task = {
  title: string;
  description: string;
  isDone: boolean;
};
type TaskListProps = {
  list: Task[];
  handleAddTask?: (listIndex: number, task: Task) => void;
  listIndex: number;
  handleDeleteList?: (listIndex: number) => void;
  handleDeleteTask?: (listIndex: number, taskIndex: number) => void;
  handleFinishTask?: (listIndex: number, taskIndex: number) => void;
  handleEditTask?: (
    listIndex: number,
    taskIndex: number,
    taskTitle: string,
    taskDescription: string
  ) => void;
};

export default function TaskList({
  list,
  handleAddTask,
  listIndex,
  handleDeleteList,
  handleDeleteTask,
  handleFinishTask,
  handleEditTask,
}: TaskListProps) {
  const [isShowEdit, setIsShowEdit] = useState(-1);
  return (
    <div className="tasklist-card flex flex-col gap-20 justify-between">
      <div>
        {list.map((task, taskIndex) => {
          return (
            <div key={taskIndex}>
              {!(isShowEdit===taskIndex) && (
                <TaskCard
                  key={taskIndex}
                  task={task}
                  handleFinishTask={handleFinishTask}
                  listIndex={listIndex}
                  taskIndex={taskIndex}
                />
              )}
              {(isShowEdit===taskIndex) && (
                <TaskEdit
                  key={taskIndex}
                  listIndex={listIndex}
                  taskIndex={taskIndex}
                  handleEditTask={handleEditTask}
                  setIsShowEdit={setIsShowEdit}
                />
              )}
              {!(isShowEdit===taskIndex) && <div className="flex flex-row justify-between">
                <button
                  onClick={() => {
                    setIsShowEdit(taskIndex);
                  }}
                >
                  Edit Task
                </button>
                <button
                  onClick={() => {
                    if (handleDeleteTask) {
                      handleDeleteTask(listIndex, taskIndex);
                    }
                  }}
                >
                  Delete Task
                </button>
              </div>}
            </div>
          );
        })}
      </div>
      <TaskInput listIndex={listIndex} handleAddTask={handleAddTask} />
      <button
        onClick={() => {
          if (handleDeleteList) {
            handleDeleteList(listIndex);
          }
        }}
      >
        Delete List
      </button>
    </div>
  );
}
