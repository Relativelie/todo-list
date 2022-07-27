import { Typography } from '@mui/material';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import {
  removeCompletedTasks,
  setFilteredTasks,
} from '../../../store/task/slice';
import * as S from './styles';

const TodoComponentsTodoCardBottomBar = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const btn = useCallback(
    (title: string, action: 'all' | 'active' | 'completed' | 'remove') => {
      let onClick: () => void;
      if (action === 'remove') {
        onClick = () => dispatch(removeCompletedTasks());
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

  return (
    <S.Container>
      <Typography variant="caption" color="#7a7a7a" fontSize={14}>
        {t('todo.remained')}
      </Typography>

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
