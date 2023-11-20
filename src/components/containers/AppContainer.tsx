import styled from "styled-components";
import Headings from "../elements/Headings";
import MessageContainer from "./MessageContainer";
import OpperationContainer from "./OpperationContainer";
import Form from "../form/Form";
import { useState } from "react";
import TaskContainer from "./TaskContainer";

const StyledDiv = styled.div`
  margin: 12rem auto;
  width: 130rem;
  padding: 2rem;

  background-color: var(--color-black);
  border-radius: var(--border-sm);
  box-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
`;

export interface Tasks {
  id: number;
  toDo: string;
  toDoTask: string;
}

const AppContainer = () => {
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  console.log(tasks);

  const handleOpen = () => {
    setOpen((open) => !open);
  };

  return (
    <StyledDiv>
      <Headings type="header">Your to do list</Headings>

      <OpperationContainer handleOpen={handleOpen} />
      {open && <Form setTasks={setTasks} />}

      {tasks.length > 0 && <TaskContainer setTasks={setTasks} tasks={tasks} />}

      {tasks.length === 0 && !open && <MessageContainer />}
    </StyledDiv>
  );
};

export default AppContainer;
