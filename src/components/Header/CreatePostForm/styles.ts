import styled from "styled-components";

export const Card = styled.div`
  margin: 24px auto;
  width: 752px;
  height: 334px;
  background-color: #fff;
  border-radius: 16px;
  border: 1px solid #999999;
  padding: 24px;
  text-color: #000;

  @media (max-width: 1024px) {
    width: 300px;
    height: 220px;
  }
`;

export const CardTitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
`;

export const Label = styled.label`
  font-size: 16px;
`;

export const Input = styled.input`
  width: 100%;
  height: 32px;
  border: 1px solid #777777;
  border-radius: 8px;
  padding: 8px;
  font-size: 16px;
  margin-bottom: 24px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 74px;
  border: 1px solid #777777;
  border-radius: 8px;
  padding: 8px;
  font-size: 16px;
  margin-bottom: 16px;
  resize: none;
`;
