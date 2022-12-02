import styled from 'styled-components';

export const StatList = styled.ul`
  display: flex;
  background-color: #cbe4f7;
  border: 1px solid #85888c;
  border-radius: 4px;
`;

export const StatInfo = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  border-right: 1px solid #85888c;

  :last-child{
    border-right: none;
  }
`;

