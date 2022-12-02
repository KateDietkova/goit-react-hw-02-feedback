import styled from 'styled-components';


export const FeedbackList = styled.ul`
    display: flex;
    justify-content: center;
    gap: 10px;
`;

export const FeedbackButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  border: none;
  text-align: center;
  cursor: pointer;
  background-color: #07bad2;
  border-radius: 5px;

  :hover {
    background-color: #1371d6;
  }
`;