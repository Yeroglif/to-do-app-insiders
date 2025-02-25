import { useState } from "react";

type TaskEditProps = {
  listIndex: number;
  taskIndex: number;
  handleEditTask?: (
    listIndex: number,
    taskIndex: number,
    taskTitle: string,
    taskDescription: string
  ) => void;
  setIsShowEdit: (isShowEdit:number) => void
};

export default function TaskEdit({
  listIndex,
  taskIndex,
  handleEditTask,
  setIsShowEdit
}: TaskEditProps) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  return (
    <div>
      <input
        onChange={(e) => {
          setTaskTitle(e.target.value);
        }}
        type="text"
        placeholder=""
        value={taskTitle}
      />
      <input
        onChange={(e) => {
          setTaskDescription(e.target.value);
        }}
        type="text"
        placeholder=""
        value={taskDescription}
      />
      <button
        onClick={() => {
          if (taskDescription && taskTitle && handleEditTask && setIsShowEdit) {
            handleEditTask(listIndex,taskIndex, taskTitle, taskDescription);
            setIsShowEdit(-1)
          }
        }}
      >
        Submit Edit
      </button>
    </div>
  );
}
