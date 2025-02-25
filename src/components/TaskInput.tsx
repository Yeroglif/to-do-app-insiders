import { useState } from "react";

type Task = {
  title: string;
  description: string;
  isDone: boolean;
};
type TaskInputProps = {
  handleAddTask?: (listIndex: number, task: Task) => void;
  listIndex: number
};

export default function TaskInput({listIndex, handleAddTask }: TaskInputProps) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  return (
    <div className="flex flex-col border-solid border-1 gap-2">
      <input onChange={(e)=>{
        setTitle(e.target.value)
      }} value={title} placeholder="Enter task title" />
      <input onChange={(e)=>{
        setDescription(e.target.value)
      }} value={description} placeholder="Enter task description" />
      <button
        onClick={() => {
          if (handleAddTask && title && description) {
            handleAddTask(listIndex,{
              title: title,
              description: description,
              isDone: false,
            });
          }
        }}
      >
        Add Task
      </button>
    </div>
  );
}
