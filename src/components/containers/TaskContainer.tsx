import styled from "styled-components";
import TaskItem from "../task/TaskItem";
import { Tasks } from "./AppContainer";

const StyledTaskContainer = styled.div`
  width: 100%;
  padding: 4rem;
  background-color: var(--color-blue);
  border-radius: var(--border-md);

  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  gap: 3rem;
`;

interface TaskProps {
  tasks: Tasks[];
  setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
}

const TaskContainer = ({ tasks, setTasks }: TaskProps) => {
  console.log(tasks);

  const handleDelete = (id: number) => {
    const updatedTask = tasks.filter((task) => task.id !== id);
    setTasks(updatedTask);
  };
  return (
    <StyledTaskContainer>
      {tasks.map((task) => (
        <TaskItem task={task} key={task.id} handleDelete={handleDelete} />
      ))}
    </StyledTaskContainer>
  );
};

export default TaskContainer;
