import { Typography } from '@mui/material';
import { ReactNode, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
import { filteredTasksSelector } from '../../../store/task/selectors';
import * as S from './styles';
import TodoComponentsTodoCardBottomBar from '../todo-card-bottom-bar';
import { setFilteredTasks, toCompleteTask } from '../../../store/task/slice';
import TodoComponentsTodoCardInput from '../todo-card-input';
import { common } from '@mui/material/colors';

const TodoComponentsTodoCard = () => {
  const dispatch = useDispatch();

  const filteredTasks = useSelector(filteredTasksSelector);

  const completedTask = useCallback((index: string, children: ReactNode) => {
    return (
      <S.TaskContainer key={index}>
        <S.CircleContainer>
          <DoneTwoToneIcon color="success" />
        </S.CircleContainer>
        {children}
      </S.TaskContainer>
    );
  }, []);

  const activeTask = useCallback((index: string, children: ReactNode) => {
    return (
      <S.TaskContainer key={index} onClick={() => taskPressed(Number(index))}>
        <S.CircleContainer />
        {children}
      </S.TaskContainer>
    );
  }, []);

  const taskPressed = (index: number) => {
    dispatch(toCompleteTask(index));
    dispatch(setFilteredTasks());
  };

  return (
    <S.CardContainer>
      <TodoComponentsTodoCardInput />
      <S.TasksContainer>
        {Object.keys(filteredTasks).map((key) => {
          if (filteredTasks[key].status === 'active') {
            const par = (
              <Typography fontSize={18} variant="body1">
                {filteredTasks[key].title}
              </Typography>
            );
            return activeTask(key, par);
          } else {
            const par = (
              <Typography
                fontSize={18}
                sx={{ textDecoration: 'line-through' }}
                variant="body1"
                color="light"
              >
                {filteredTasks[key].title}
              </Typography>
            );
            return completedTask(key, par);
          }
        })}
      </S.TasksContainer>
      <TodoComponentsTodoCardBottomBar />
    </S.CardContainer>
  );
};

export default TodoComponentsTodoCard;
