import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import { ProgressCircle } from '../progressCircle';

export const StatBox = ({ icon, amount, progress, label, increase }: any) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" margin="0 20px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={1}
      >
        <Box>
          {icon}
          <Typography
            variant="h5"
            fontWeight="bold"
            color={colors.grey[100]}
            mt="5px"
          >
            {amount}
          </Typography>
        </Box>
        <ProgressCircle progress={progress} />
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography
          variant="h6"
          textTransform="capitalize"
          color={colors.greenAccent[500]}
        >
          {label}
        </Typography>
        <Typography
          variant="h6"
          color={colors.greenAccent[500]}
          fontStyle="italic"
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};
