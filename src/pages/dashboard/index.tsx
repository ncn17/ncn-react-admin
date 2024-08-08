import { Button, useTheme } from '@mui/material';
import { Download } from '@mui/icons-material';
import { Header } from '../../components/header';
import { tokens } from '../../theme';

export default function DashBoard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div>
      <Header
        title="Dashbord"
        subTitle="Welcome to your dashboard"
        option={
          <Button
            variant="contained"
            startIcon={<Download />}
            sx={{
              textTransform: 'uppercase',
              backgroundColor: colors.blueAccent[700],
              padding: '10px 15px',
            }}
          >
            Download reports
          </Button>
        }
      />
      dashboard
    </div>
  );
}
