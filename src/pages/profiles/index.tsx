import { Box, useTheme } from '@mui/material';
import { Header } from '../../components/header';
import { tokens } from '../../theme';

export const Profiles = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m={2}>
      <Header title="create user" subTitle="Create a New User Profile" />
    </Box>
  );
};
