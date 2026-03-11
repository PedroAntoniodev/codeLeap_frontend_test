import styled from "styled-components";

export const PostCard = styled.div`
  width: 752px;
  height: 316px;
  margin: 24px auto;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #999999;
  text-color: #000;

  @media (max-width: 1024px) {
    width: 300px;
    height: 220px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  color: #fff;
  background-color: #7695ec;
  border-radius: 8px 8px 0 0;
  margin-bottom: 10px;
`;

export const CardTitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
  padding: 16px 37px;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 8px;
  padding: 16px;
`;

export const Icon = styled.img`
  width: 30px;
  height: 30px;
`;

export const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ParagraphContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Paragraph = styled.p`
  padding: 16px 24px;
  font-size: 18px;
  font-height: 700;
  color: #777777;
`;

export const Content = styled.h3`
  font-size: 18px;
  font-weight: 400;
  padding: 24px;
`;
