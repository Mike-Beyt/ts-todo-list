import styled from "styled-components";
import Paragraphs from "../elements/Paragraphs";
import Button from "../elements/Button";

const StyledDiv = styled.div`
  width: 100%;
  padding: 4rem;
  background-color: var(--color-blue);
  border-radius: var(--border-sm);

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface Props {
  handleOpen: () => void;
}

const OpperationContainer = ({ handleOpen }: Props) => {
  return (
    <StyledDiv>
      <Paragraphs type="messageParagraph">
        {" "}
        Lorem, ipsum dolor sit amet consectetur adipisicing laudantium!{" "}
      </Paragraphs>

      <Button type="add" onClick={() => handleOpen()}>
        Add a task
      </Button>
    </StyledDiv>
  );
};

export default OpperationContainer;
