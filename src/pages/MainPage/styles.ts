import styled from "styled-components";

export const MainPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-color: #fff;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
`;

export const PageButton = styled.button`
  padding: 8px 16px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;
