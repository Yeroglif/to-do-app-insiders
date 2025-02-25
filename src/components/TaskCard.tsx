type TaskCardProps = {
    task: {title:string, description: string, isDone: boolean}
  };
  export default function TaskCard({task}: TaskCardProps) {
    return (
      <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <span>{task.isDone ? 'Done' : 'ToDo'}</span>
      </div>
    );
  }
  