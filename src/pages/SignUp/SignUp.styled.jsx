import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
  width: 80%;
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 16px;
  margin-bottom: 5px;
  margin-left: 10%;
`;

const CheckBoxWrapper = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
`;

const CheckBoxInput = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  width: 3rem;
  height: 3rem;
  border: 1.5px solid gainsboro;
  border-radius: 50%;
  &:checked {
    border-color: #ffffff;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-color: #a5ce55;
    background-position: 50%;
    background-repeat: no-repeat;
  }
`;

const CheckBoxText = styled.p`
  margin-left: 1.5rem;
`;

const TermWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 10px;
  padding: 40px 50px;
  border-radius: 5rem;
  border: 3px solid #a5ce55;
  box-shadow: 0px 6px 2px 0px rgba(134, 145, 165, 0.25);
  -webkit-box-shadow: 0px 6px 2px 0px rgba(134, 145, 165, 0.25);
  -moz-box-shadow: 0px 6px 2px 0px rgba(134, 145, 165, 0.25);
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #a5ce55;
  margin: 10px;
`;

const InputButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
`;

const InputText = styled.p`
  font-size: 20px;
  font-style: bold;
  margin: 10px;
`;

export {
  FormContainer,
  InputContainer,
  ErrorMessage,
  TermWrapper,
  Divider,
  CheckBoxInput,
  CheckBoxText,
  CheckBoxWrapper,
  InputButtonWrapper,
  InputText,
};