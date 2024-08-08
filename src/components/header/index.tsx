import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';

type HeaderType = {
  title: string,
  subTitle: string,
  // eslint-disable-next-line react/require-default-props
  option?: JSX.Element,
};
export const Header = ({ title, subTitle, option }: HeaderType) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      m={2}
    >
      <Box>
        <Typography
          variant="h3"
          textTransform="uppercase"
          mb="5px"
          fontWeight="bold"
          color={colors.grey[100]}
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          fontSize="0.8rem"
          color={colors.greenAccent[400]}
        >
          {subTitle}
        </Typography>
      </Box>
      {option}
    </Box>
  );
};
