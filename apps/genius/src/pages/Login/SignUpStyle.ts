// SignUpStyle.ts

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 50px;
  width: 100vw;
  max-width: 100%;
  margin-left: 30px;
  justify-content: center;
  overflow-x: hidden;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 600px;
  margin-top: 50px auto;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 15px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 15px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 18px;
  color: #fff;
  margin-top: 30px;
  margin-bottom: 50px;
  background-color: #8DD1BD;
  cursor: pointer;
`;

export const Divider = styled.div`
  width: 80%;
  border-bottom: 2px solid #9D9D9D;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const Label = styled.div`
  text-align: left;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 16px;
  margin-right: 30px;
  white-space: nowrap;
  max-width: 100px;
`;

export const PhoneInputContainer = styled.div`
  display: flex;
  gap: 25px;
`;

export const PhoneInputBox = styled.div`
  display: flex;
  align-items: center;
`;

export const Hyphen = styled.span`
  margin: 0 5px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
  margin-top: 10px;
`;

export const FlexContainer = styled.div`
  flex: 1;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-bottom: 15px;
  margin-top: 5px;
`;

export const Checkbox = styled.input`
  margin-right: 8px;
`;

export const ErrorMessage = styled.div`
  color: #FF0000;
  font-size: 14px;
  margin-top: 5px;
`;

export default {
  Container,
  Form,
  Input,
  TextArea,
  Button,
  Divider,
  Label,
  PhoneInputContainer,
  PhoneInputBox,
  Hyphen,
  Row,
  FlexContainer,
  CheckboxLabel,
  Checkbox,
  ErrorMessage,
};
