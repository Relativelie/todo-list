import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import TodoComponentsTodoCard from '../../components/todo-card';
import * as S from './styles';

const PagesTodoMain = () => {
  const { t } = useTranslation();

  return (
    <S.Container>
      <Typography variant="h1" component="div" color="#db555560">
        {t('todo.title')}
      </Typography>
      <TodoComponentsTodoCard />
    </S.Container>
  );
};

export default PagesTodoMain;
