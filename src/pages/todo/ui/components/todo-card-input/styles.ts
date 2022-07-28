import styled from '@emotion/styled';
import { Input } from '@mui/material';

export const TaskInput = styled(Input)`
${(props: any) => {
  return `box-shadow: 0 2px 3px -2px ${props.theme.palette.secondary.light};`;
}}
  padding: 10px 0;
`;
