import { Box } from '@mui/material';
import { Header } from '../../components/header';
import { mockLineData } from '../../data/mockData';
import { AppLine } from '../../components/appLine';

export const LineCharts = () => {
  return (
    <Box m={2}>
      <Header title="Line Chart" subTitle="Simple Line chart Page" />
      <Box mt={1} height="75vh">
        <AppLine data={mockLineData} />
      </Box>
    </Box>
  );
};
