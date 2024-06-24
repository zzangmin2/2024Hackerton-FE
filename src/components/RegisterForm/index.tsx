import { HomeProps } from "../../typings/db";
import StyledButton from "../StyledButton";
import {
  ButtonWrapper,
  CloseButtonWrap,
  Form,
  Input,
  InputRow,
  Title,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ModalContext } from "../../App";

const RegisterForm: React.FC<HomeProps> = ({
  handleSubmit,
  title,
  placeholder,
  value,
  setValue,
  buttonText,
}) => {
  // modalContext 가져오기
  const modalContext = useContext(ModalContext);
  if (!modalContext) {
    throw new Error("ModalContext.Provider 없음");
  }
  const { setModal } = modalContext;
  return (
    <>
      <Form>
        {title === "방 생성하기" ? (
          <CloseButtonWrap>
            <button onClick={() => setModal(false)}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </CloseButtonWrap>
        ) : (
          <></>
        )}
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
