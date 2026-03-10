import styled from "styled-components";

export const Button = styled.button`
  align-self: flex-end;
  width: 110px;
  height: 32px;
  border: none;
  font-size: 16px;
  color: #fff;
  background-color: #7695ec;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;

  &:hover:enabled {
    opacity: 0.8;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  @media (max-width: 1024px) {
    font-size: 14px;
    width: 100px;
  }
`;
