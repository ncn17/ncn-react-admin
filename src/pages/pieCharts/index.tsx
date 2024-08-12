import { Box } from '@mui/material';
import { Header } from '../../components/header';
import { mockPieData } from '../../data/mockData';
import { AppPie } from '../../components/appPie';

export const PieCharts = () => {
  return (
    <Box m={2}>
      <Header title="Pie Chart" subTitle="Simple Pie chart Page" />
      <Box mt={1} height="75vh">
        <AppPie data={mockPieData} />
      </Box>
    </Box>
  );
};
