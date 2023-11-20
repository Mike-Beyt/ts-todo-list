import styled from "styled-components";
import { useForm } from "react-hook-form";
import Button from "../elements/Button";
import StyledInput from "../elements/Input";
import FormRow from "../containers/FormRow";
import { Tasks } from "../containers/AppContainer";

const StyledForm = styled.form`
  width: 100%;
  padding: 4rem;
  background-color: var(--color-blue);
  border-radius: var(--border-md);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 6rem;
`;

interface Inputs {
  task: string;
  desc: string;
}

interface FormProps {
  setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
}

const Form = ({ setTasks }: FormProps) => {
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);

    setTasks((prevTask) => {
      const newTask: Tasks = {
        id: Math.random(),
        toDo: data.task,
        toDoTask: data.desc,
      };
      return [...prevTask, newTask];
    });

    reset();
  });

  return (
    <StyledForm onSubmit={onSubmit}>
      <FormRow>
        <label htmlFor="task">Your task name :</label>
        <StyledInput id="task" {...register("task")} />
      </FormRow>

      <FormRow>
        <label htmlFor="desc"> Your task description :</label>
        <StyledInput id="desc" {...register("desc")} />
      </FormRow>

      <Button type="submit" onClick={() => onSubmit}>
        {" "}
        Submit{" "}
      </Button>
    </StyledForm>
  );
};

export default Form;
