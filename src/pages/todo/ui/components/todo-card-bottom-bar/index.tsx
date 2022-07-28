import { Typography } from '@mui/material';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeCompletedTasks,
  setFilteredTasks,
} from '../../../store/task/slice';
import {
  tasksSelector,
  activeFilterSelector,
} from '../../../store/task/selectors';
import * as S from './styles';

const TodoComponentsTodoCardBottomBar = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const tasks = useSelector(tasksSelector);
  const selectedFilter = useSelector(activeFilterSelector);

  const btn = useCallback(
    (title: string, action: 'all' | 'active' | 'completed' | 'remove') => {
      let onClick: () => void;
      let isActive;
      if (action === 'remove') {
        onClick = () => {
          dispatch(removeCompletedTasks());
          dispatch(setFilteredTasks());
        };
      } else {
        onClick = () => dispatch(setFilteredTasks(action));
        if (selectedFilter === action) {
          isActive = true;
        }
      }

      return (
        <S.BtnContainer isActive={isActive} onClick={onClick}>
          <Typography variant="caption" color="secondary.light" fontSize={14}>
            {title}
          </Typography>
        </S.BtnContainer>
      );
    },
    [selectedFilter],
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
      <Typography variant="caption" color="secondary.light" fontSize={14}>
        {`${count} ${t('todo.remained')}`}
      </Typography>
    );
  }, [tasks]);

  return (
    <S.Container>
      <S.CountContainer>{activeTasksCount}</S.CountContainer>
      <S.BtnGroup>
        {btn(t('todo.btn.all'), 'all')}
        {btn(t('todo.btn.active'), 'active')}
        {btn(t('todo.btn.completed'), 'completed')}
      </S.BtnGroup>
      <S.RemoveBtn>{btn(t('todo.btn.clearCompleted'), 'remove')}</S.RemoveBtn>
    </S.Container>
  );
};

export default TodoComponentsTodoCardBottomBar;
