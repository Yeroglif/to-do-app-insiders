type Task = {
  title: string;
  description: string;
  isDone: boolean;
};
type TaskListInputProps = {
  handleAddList?: (list: Task[]) => void;
};

export default function TaskListInput({ handleAddList }: TaskListInputProps) {
  return (
    <div>
      <button
        onClick={() => {
          if (handleAddList) {
            handleAddList([
              {
                title: "Task 1",
                description: "First task",
                isDone: false,
              },
            ]);
          }
        }}
      >
        Add list
      </button>
    </div>
  );
}
