import styled from "styled-components";

export const HomePageContainer = styled.div`
  height: 100vh;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  width: 500px;
  height: 205px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  text-color: #000;

  @media (max-width: 1024px) {
    width: 300px;
    height: 220px;
  }
`;

export const CardTitle = styled.h1`
  font-size: 22px;
  font-weight: bold;
  margin: 24px 0;

  @media (max-width: 1024px) {
    font-size: 16px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 1024px) {
    gap: 4px;
  }
`;

export const Label = styled.label`
  font-size: 16px;

  @media (max-width: 1024px) {
    font-size: 12px;
  }
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #777;
  border-radius: 8px;

  @media (max-width: 1024px) {
    margin: 8px 0;
  }
`;
