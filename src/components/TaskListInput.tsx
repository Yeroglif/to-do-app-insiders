type Task = {
    title: string;
    description: string;
    isDone: boolean;
  };
type TaskListInputProps = {
    setTaskLists?: (taskLists: Task[][]) => void 
};

export default function TaskListInput({setTaskLists}: TaskListInputProps) {
  return (
    <div>
      
    </div>
  );
}
