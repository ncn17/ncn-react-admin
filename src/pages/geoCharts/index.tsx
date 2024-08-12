import { Box, colors } from '@mui/material';
import { Header } from '../../components/header';
import { mockGeographyData } from '../../data/mockData';
import { AppGeo } from '../../components/appGeo';

export const GeoCharts = () => {
  return (
    <Box m={2}>
      <Header title="Geography Chart" subTitle="Simple Geography chart Page" />
      <Box
        mt={2}
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <AppGeo data={mockGeographyData} />
      </Box>
    </Box>
  );
};
