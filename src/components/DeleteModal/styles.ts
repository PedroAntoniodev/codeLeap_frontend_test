import styled from "styled-components";

export const DeleteModalContent = styled.div`
  width: 660px;
  height: 120px;
  display: flex;
  flex-direction: column;
`;

export const ModalTitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 24px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 24px;
`;

export const DeleteButton = styled.button`
  width: 120px;
  height: 32px;
  border: none;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  background-color: #ff5151;
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
