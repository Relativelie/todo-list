import styled from '@emotion/styled';

export const CardContainer = styled.div`
  width: 600px;
  box-shadow: 0 0 5px #7a7a7a;
  background-color: #ffff;
`;

export const CircleContainer = styled.div`
  width: 24px;
  height: 24px;
  padding: 3px;
  border: solid 1px #7a7a7a60;
  border-radius: 50%;
  margin-right: 15px;
`;

export const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 400px;
  margin-top: 15px;
  margin-left: 5px;
  margin-bottom: 15px;
  overflow: auto;
`;
