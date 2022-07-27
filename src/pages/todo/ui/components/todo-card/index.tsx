import { InputAdornment, Typography } from '@mui/material';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
import { useTranslation } from 'react-i18next';
import { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
import { filteredTasksSelector, isActiveFilterSelector } from '../../../store/task/selectors';
import * as S from './styles';
import TodoComponentsTodoCardBottomBar from '../todo-card-bottom-bar';
import { addTask, setFilteredTasks } from '../../../store/task/slice';

const TodoComponentsTodoCard = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const textInput = useRef<HTMLInputElement>(null);
  const filteredTasks = useSelector(filteredTasksSelector);
  const activeFilter = useSelector(isActiveFilterSelector);

  const completedTask = useCallback((title: string, index: string) => {
    return (
      <S.TaskContainer key={index}>
        <S.CircleContainer>
          <DoneTwoToneIcon color="success" />
        </S.CircleContainer>
        <Typography fontSize={18} variant="body1" gutterBottom>
          {title}
        </Typography>
      </S.TaskContainer>
    );
  }, []);

  const activeTask = useCallback((title: string, index: string) => {
    return (
      <S.TaskContainer key={index}>
        <S.CircleContainer />
        <Typography fontWeight={300} fontSize={18} variant="body1" gutterBottom>
          {title}
        </Typography>
      </S.TaskContainer>
    );
  }, []);

  const isEnterPressed = (e:KeyboardEvent) => {
    if (e.key === 'Enter') {
        const target = e.target as HTMLInputElement;
        dispatch(addTask(target.value));
        dispatch(setFilteredTasks(activeFilter));
        if (textInput.current !== null) {
            textInput.current.value = '';
        }
    }
  };

  return (
    <S.CardContainer>
        <S.TaskInput
          disableUnderline
          fullWidth
          inputRef={textInput}
          placeholder={t('todo.inputPlaceholder')}
          onKeyPress={(e) => isEnterPressed(e)}
          startAdornment={(
            <InputAdornment position="start">
              <ExpandMoreSharpIcon />
            </InputAdornment>
          )}
        />
      <S.TasksContainer>
        {Object.keys(filteredTasks).map((key) => {
          if (filteredTasks[key].status === 'active') {
            return activeTask(filteredTasks[key].title, key);
          } else {
            return completedTask(filteredTasks[key].title, key);
          }
        })}
      </S.TasksContainer>
      <TodoComponentsTodoCardBottomBar />
    </S.CardContainer>
  );
};

export default TodoComponentsTodoCard;
