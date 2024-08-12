import { Box } from '@mui/material';
import { Header } from '../../components/header';
import { AppBar } from '../../components/appBar';
import { mockBarData } from '../../data/mockData';

export const BarCharts = () => {
  return (
    <Box m={2}>
      <Header title="Bar Chart" subTitle="Simple Bar chart Page" />
      <Box mt={1} height="75vh">
        <AppBar data={mockBarData} />
      </Box>
    </Box>
  );
};
