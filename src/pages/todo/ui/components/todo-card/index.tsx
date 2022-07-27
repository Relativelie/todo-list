import { FormControl, InputAdornment } from '@mui/material';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
import { tasksSelector } from '../../../store/task/selectors';
import * as S from './styles';
import TodoComponentsTodoCardBottomBar from '../todo-card-bottom-bar';

const TodoComponentsTodoCard = () => {
  const { t } = useTranslation();
  const content = useSelector(tasksSelector);

  const closedTaskIcon = useMemo(() => {
    return (
      <S.CircleContainer>
        <DoneTwoToneIcon color="success" />
      </S.CircleContainer>
    );
  }, []);

  const openedTaskIcon = useMemo(() => {
    return <S.CircleContainer />;
  }, []);

  return (
    <S.CardContainer>
      <FormControl fullWidth>
        <S.TaskInput
          disableUnderline
          id="input-with-icon-adornment"
          placeholder={t('todo.inputPlaceholder')}
          startAdornment={(
            <InputAdornment position="start">
              <ExpandMoreSharpIcon />
            </InputAdornment>
          )}
        />
      </FormControl>
      <S.TaskContainer>
        {closedTaskIcon}
        <p>dfvdfv</p>
      </S.TaskContainer>
      <TodoComponentsTodoCardBottomBar />
    </S.CardContainer>
  );
};

export default TodoComponentsTodoCard;
