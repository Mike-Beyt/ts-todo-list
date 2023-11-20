import { ReactNode } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & label {
    font-size: var(--fs-sm);
    color: var(--color-lightblue);
  }
`;

interface FormRowProps {
  children: ReactNode;
}

const FormRow: React.FC<FormRowProps> = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default FormRow;
