import styled from "styled-components";
import Headings from "../elements/Headings";
import Paragraphs from "../elements/Paragraphs";

const StyledMessageDiv = styled.div`
  max-width: 80rem;
  margin: 1rem auto;
  padding: 2rem 8rem;
  background-color: var(--color-blue);
  border-radius: var(--border-md);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
`;

const MessageContainer = () => {
  return (
    <StyledMessageDiv>
      <Headings type="messageHeader"> No new tasks were found ! </Headings>

      <StyledDiv>
        <Paragraphs type="messageParagraph">
          {" "}
          You can add a task right now{" "}
        </Paragraphs>
      </StyledDiv>
    </StyledMessageDiv>
  );
};

export default MessageContainer;
