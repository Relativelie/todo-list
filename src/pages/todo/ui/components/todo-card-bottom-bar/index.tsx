import { Typography } from '@mui/material';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { tasksSelector } from '../../../store/task/selectors';
import {
  removeCompletedTasks,
  setFilteredTasks,
} from '../../../store/task/slice';
import * as S from './styles';

const TodoComponentsTodoCardBottomBar = () => {
  const { t } = useTranslation();
  const content = useSelector(tasksSelector);

  const showAllTasks = () => {
    setFilteredTasks(content);
  };

  const showActiveTasks = () => {
    const allTasks = { ...content };
    Object.keys(allTasks).forEach((key) => {
        if (allTasks.key.status === 'completed') {
            delete allTasks[key];
        }
    });
    setFilteredTasks(allTasks);
  };

  const showCompletedTasks = () => {
    const allTasks = { ...content };
    Object.keys(allTasks).forEach((key) => {
        if (allTasks.key.status === 'active') {
            delete allTasks[key];
        }
    });
    setFilteredTasks(allTasks);
  };

  const btn = useCallback((title: string, clickAction: () => void) => {
    return (
      <S.BtnContainer onClick={clickAction}>
        <Typography variant="caption" color="#7a7a7a" fontSize={14}>
          {title}
        </Typography>
      </S.BtnContainer>
    );
  }, []);

  return (
    <S.Container>
      <Typography variant="caption" color="#7a7a7a" fontSize={14}>
        {t('todo.remained')}
      </Typography>

      <S.BtnGroup>
        {btn(t('todo.btn.all'), showAllTasks)}
        {btn(t('todo.btn.active'), showActiveTasks)}
        {btn(t('todo.btn.completed'), showCompletedTasks)}
      </S.BtnGroup>
      {btn(t('todo.btn.clearCompleted'), removeCompletedTasks)}
    </S.Container>
  );
};

export default TodoComponentsTodoCardBottomBar;
