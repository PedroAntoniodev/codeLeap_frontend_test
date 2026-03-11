import styled from "styled-components";

export const EditModalContent = styled.div`
  width: 660px;
  height: 334px;
  display: flex;
  flex-direction: column;
`;

export const ModalTitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 24px;
  margin-top: 16px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 100%;
  height: 32px;
  border: 1px solid #777777;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 24px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 74px;
  border: 1px solid #777777;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 24px;
  resize: none;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`;

export const CancelButton = styled.button`
  width: 120px;
  height: 32px;
  border: 1px solid #000000;
  font-size: 16px;
  font-weight: 700;
  color: #000;
  background-color: #fff;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

export const SaveButton = styled.button`
  width: 120px;
  height: 32px;
  border: none;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  background-color: #47b960;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;
