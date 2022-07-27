import { Typography } from '@mui/material';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeCompletedTasks,
  setFilteredTasks,
} from '../../../store/task/slice';
import { tasksSelector } from '../../../store/task/selectors';
import * as S from './styles';

const TodoComponentsTodoCardBottomBar = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const tasks = useSelector(tasksSelector);

  const btn = useCallback(
    (title: string, action: 'all' | 'active' | 'completed' | 'remove') => {
      let onClick: () => void;
      if (action === 'remove') {
        onClick = () => {
          dispatch(removeCompletedTasks());
          dispatch(setFilteredTasks());
        };
      } else onClick = () => dispatch(setFilteredTasks(action));

      return (
        <S.BtnContainer onClick={onClick}>
          <Typography variant="caption" color="#7a7a7a" fontSize={14}>
            {title}
          </Typography>
        </S.BtnContainer>
      );
    },
    [],
  );

  const activeTasksCount = useMemo(() => {
    let count = 0;
    if (Object.keys(tasks).length !== 0) {
      count = Object.keys(tasks).reduce((acc, key) => {
        if (tasks[key].status === 'active') {
          return acc + 1;
        } else {
          return acc;
        }
      }, 0);
    }
    if (count === 0) {
      return null;
    }
    return (
      <Typography variant="caption" color="#7a7a7a" fontSize={14}>
        {`${count} ${t('todo.remained')}`}
      </Typography>
    );
  }, [tasks]);

  return (
    <S.Container>
      {activeTasksCount}
      <S.BtnGroup>
        {btn(t('todo.btn.all'), 'all')}
        {btn(t('todo.btn.active'), 'active')}
        {btn(t('todo.btn.completed'), 'completed')}
      </S.BtnGroup>
      {btn(t('todo.btn.clearCompleted'), 'remove')}
    </S.Container>
  );
};

export default TodoComponentsTodoCardBottomBar;
