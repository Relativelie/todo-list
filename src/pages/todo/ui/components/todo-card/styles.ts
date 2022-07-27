import styled from "@emotion/styled";
import { Input } from "@mui/material";

export const CardContainer = styled.div`
  width: 600px;
  box-shadow: 0 0 5px #7a7a7a;
  background-color: #ffff;
`;

export const TaskInput = styled(Input)`
  padding: 10px 0;
  box-shadow: 0 2px 3px -2px #7a7a7a;
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
`;

export const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 15px 0 15px 5px;
`;
