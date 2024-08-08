import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import AdminPanelSettingsOutlined from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlined from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlined from '@mui/icons-material/SecurityOutlined';

import { tokens } from '../../theme';
import { mockDataTeam } from '../../data/mockData';
import { Header } from '../../components/header';

export const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const getAccessBgColor = (access: string) => {
    switch (access) {
      case 'admin':
        return colors.greenAccent[600];
      case 'manager':
        return colors.greenAccent[700];
      default:
        return colors.greenAccent[700];
    }
  };

  const getAccessIcon = (access: string) => {
    switch (access) {
      case 'admin':
        return <AdminPanelSettingsOutlined />;
      case 'manager':
        return <SecurityOutlined />;
      default:
        return <LockOpenOutlined />;
    }
  };

  const columns: GridColDef<(typeof mockDataTeam)[number]>[] = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      flex: 1,
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      type: 'string',
      flex: 1,
    },
    {
      field: 'email',
      headerName: 'Email',
      type: 'string',
      flex: 1,
    },
    {
      field: 'access',
      headerName: 'Access Level',
      type: 'custom',
      flex: 1,
      display: 'flex',
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            alignContent="center"
            width="100px"
            margin="0 auto"
            padding="5px"
            bgcolor={getAccessBgColor(access)}
            borderRadius="4px"
          >
            {getAccessIcon(access)}
            <Typography
              textTransform="capitalize"
              color={colors.grey[100]}
              sx={{ ml: '5px' }}
            >
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m={2}>
      <Header title="team" subTitle="Managing the Team Members" />
      <Box
        mt="20px"
        height="75vh"
        sx={{
          '& .name-column--cell': {
            color: colors.greenAccent[300],
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: colors.blueAccent[700],
          },
          '& .MuiCheckbox-root': {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataTeam}
          columns={columns}
          checkboxSelection={false}
        />
      </Box>
    </Box>
  );
};
