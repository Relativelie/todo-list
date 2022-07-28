import { InputAdornment } from '@mui/material';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { addTask, setFilteredTasks } from '../../../store/task/slice';
import * as S from './styles';

const TodoComponentsTodoCardInput = () => {
  const textInput = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const isEnterPressed = (e: KeyboardEvent) => {
    const target = e.target as HTMLInputElement;
    if (e.key === 'Enter' && target.value.trim().length !== 0) {
      dispatch(addTask(target.value));
      dispatch(setFilteredTasks());
      if (textInput.current !== null) {
        textInput.current.value = '';
      }
    }
  };

  return (
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
  );
};

export default TodoComponentsTodoCardInput;
