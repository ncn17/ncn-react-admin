import { Box, Button, Typography, useTheme } from '@mui/material';
import {
  Download,
  Mail,
  PersonAdd,
  PointOfSale,
  Traffic,
} from '@mui/icons-material';
import { Header } from '../../components/header';
import { tokens } from '../../theme';
import { StatBox } from '../../components/statBox';
import { AppLine } from '../../components/appLine';
import {
  mockLineData,
  mockTransactions,
  mockBarData,
  mockGeographyData,
} from '../../data/mockData';
import { ProgressCircle } from '../../components/progressCircle';
import { AppBar } from '../../components/appBar';
import { AppGeo } from '../../components/appGeo';

const BuildBoxStat = ({
  icon,
  amount,
  progress,
  label,
  increase,
  gridColumn = 'span 3',
}: any) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      gridColumn={gridColumn}
      bgcolor={colors.primary[400]}
      borderRadius="5px"
    >
      <StatBox
        icon={icon}
        amount={amount}
        progress={progress}
        label={label}
        increase={increase}
      />
    </Box>
  );
};
export default function DashBoard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m={2}>
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
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="120px"
        gap="30px"
        mt={2}
      >
        <BuildBoxStat
          icon={<Mail sx={{ color: colors.greenAccent[600] }} />}
          progress={0.75}
          amount="12,361"
          label="Emails sent"
          increase="+14%"
        />
        <BuildBoxStat
          icon={<PointOfSale sx={{ color: colors.greenAccent[600] }} />}
          amount="431,225"
          progress={0.6}
          label="Sales obtained"
          increase="+21%"
        />
        <BuildBoxStat
          icon={<PersonAdd sx={{ color: colors.greenAccent[600] }} />}
          amount="32,441"
          progress={0.15}
          label="New clients"
          increase="+15%"
        />
        <BuildBoxStat
          icon={<Traffic sx={{ color: colors.greenAccent[600] }} />}
          amount="1,325,134"
          label="Traffic Received"
          progress={0.43}
          increase="+43%"
        />
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgcolor={colors.primary[400]}
          borderRadius="5px"
          gridColumn="span 8"
          gridRow="span 2"
        >
          <Box width="100%" margin="0 20px">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography>Revenue Generated</Typography>
                <Typography
                  variant="h4"
                  sx={{
                    color: colors.greenAccent[600],
                    fontWeight: 'bold',
                    marginTop: '5px',
                  }}
                >
                  $59,342.32
                </Typography>
              </Box>
              <Download
                sx={{ color: colors.greenAccent[600], fontSize: '25px' }}
              />
            </Box>
            <Box height="230px" m="-35px 0 0 0">
              <AppLine data={mockLineData} />
            </Box>
          </Box>
        </Box>
        <Box
          bgcolor={colors.primary[400]}
          borderRadius="5px"
          gridColumn="span 4"
          gridRow="span 2"
          overflow="auto"
        >
          <Box padding="15px" borderBottom={`4px solid ${colors.primary[500]}`}>
            <Typography variant="h6">Recent Transactions</Typography>
          </Box>
          {mockTransactions.map((item) => (
            <Box
              key={item.txId}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              padding="15px"
              borderBottom={`4px solid ${colors.primary[500]}`}
            >
              <Box>
                <Typography color={colors.greenAccent[500]}>
                  {item.txId}
                </Typography>
                <Typography>{item.user}</Typography>
              </Box>
              <Typography>{item.date}</Typography>
              <Typography
                padding="5px 10px"
                borderRadius="4px"
                bgcolor={colors.greenAccent[500]}
              >
                ${item.cost}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box
          bgcolor={colors.primary[400]}
          borderRadius="5px"
          gridColumn="span 4"
          gridRow="span 2"
          overflow="auto"
          padding="15px"
        >
          <Typography variant="h6">Campaign</Typography>
          <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            mt={3}
          >
            <ProgressCircle progress={0.5} size="120" />
            <Typography mt="10px" color={colors.greenAccent[400]}>
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box
          bgcolor={colors.primary[400]}
          borderRadius="5px"
          gridColumn="span 4"
          gridRow="span 2"
          overflow="auto"
          padding="15px"
        >
          <Typography variant="h6">Sales Quantity</Typography>
          <Box height="250px" mt="-25px">
            <AppBar data={mockBarData} isDashboard />
          </Box>
        </Box>
        <Box
          bgcolor={colors.primary[400]}
          borderRadius="5px"
          gridColumn="span 4"
          gridRow="span 2"
          overflow="auto"
          padding="15px"
        >
          <Typography variant="h6">Geography Based Traffic</Typography>
          <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            mt={2}
            height="25vh"
            width="100%"
          >
            <AppGeo data={mockGeographyData} isDashboard />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
