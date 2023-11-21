import styled from "styled-components";
import { Tasks } from "../containers/AppContainer";
import Headings from "../elements/Headings";
import Paragraphs from "../elements/Paragraphs";
import Button from "../elements/Button";

const StyledTaskItem = styled.div`
  width: 100%;
  padding: 2rem 4rem;
  background-color: var(--color-black);
  border-radius: var(--border-sm);

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledTaskHolder = styled.div`
  display: flex;
  gap: 2rem;
`;

// interface taskProp {
//   task: Tasks;
//   handleDelete: (id: number) => void;
// }

const TaskItem = ({ task, handleDelete }: taskProp) => {
  return (
    <StyledTaskItem>
      <StyledTaskHolder>
        <Headings type="taskHeader">{task.toDo} :</Headings>
        <Paragraphs type="taskParagrapgh">" {task.toDoTask} "</Paragraphs>
      </StyledTaskHolder>

      <Button type="delete" onClick={() => handleDelete(task.id)}>
        Delete
      </Button>
    </StyledTaskItem>
  );
};

export default TaskItem;
