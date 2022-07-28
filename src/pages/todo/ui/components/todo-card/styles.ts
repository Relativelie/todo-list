import styled from '@emotion/styled';

export const CardContainer = styled.div`
  ${(props: any) => {
    return `box-shadow: 0 0 5px ${props.theme.palette.secondary.light};`;
  }}
  width: 600px;
  background-color: #ffff;
`;

export const CircleContainer = styled.div`
${(props: any) => {
  return `border: solid 0.1px ${props.theme.palette.secondary.light};`;
}}
  width: 24px;
  height: 24px;
  padding: 3px;
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

export const EmptyTasksContainer = styled.div`
  display: flex;
  justify-content: center;
`;
