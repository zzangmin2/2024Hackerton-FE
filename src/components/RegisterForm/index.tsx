import StyledButton from "../StyledButton";
import { ButtonWrapper, Form, Input, InputRow, Title } from "./styles";

interface Props {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  title: string;
  placeholder: string;
  value: string;
  setValue: (newValue: string) => void;
  buttonText: string;
}

const RegisterForm: React.FC<Props> = ({
  handleSubmit,
  title,
  placeholder,
  value,
  setValue,
  buttonText,
}) => {
  return (
    <>
      <Form>
        <Title>{title}</Title>
        <InputRow>
          <Input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
          />
          {/* <CheckButton onClick={handleCheckUsername}>중복확인</CheckButton> */}
        </InputRow>
        <ButtonWrapper>
          <StyledButton text={buttonText} onClick={handleSubmit} />
        </ButtonWrapper>
      </Form>
    </>
  );
};

export default RegisterForm;
