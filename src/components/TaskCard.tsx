type TaskCardProps = {
  task: { title: string; description: string; isDone: boolean };
  handleFinishTask?: (listIndex: number, taskIndex: number) => void;
  listIndex: number
  taskIndex: number
};
export default function TaskCard({ task, handleFinishTask, listIndex, taskIndex }: TaskCardProps) {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button
        onClick={() => {
          if(handleFinishTask && (listIndex+1) && (taskIndex+1)){
          handleFinishTask(listIndex, taskIndex);
          }
        }}
        disabled={task.isDone}
      >
        <h6>Done</h6>
      </button>
    </div>
  );
}
