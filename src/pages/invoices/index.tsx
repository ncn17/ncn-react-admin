import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { tokens } from '../../theme';
import { mockDataInvoices } from '../../data/mockData';
import { Header } from '../../components/header';

export const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns: GridColDef<(typeof mockDataInvoices)[number]>[] = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
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
      field: 'cost',
      headerName: 'Cost',
      flex: 1,
      cellClassName: 'name-column--cell',
      renderCell: ({ row: { cost } }) => {
        return (
          <Box display="flex" alignItems="center">
            <Typography>${cost}</Typography>
          </Box>
        );
      },
    },
    {
      field: 'date',
      headerName: 'Date',
      type: 'string',
      flex: 1,
    },
  ];

  return (
    <Box m={2}>
      <Header title="Invoices" subTitle="List of Invoice Balances" />
      <Box
        mt="20px"
        height="75vh"
        sx={{
          '& .name-column--cell': {
            color: colors.greenAccent[300],
            display: 'flex',
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
        <DataGrid rows={mockDataInvoices} columns={columns} checkboxSelection />
      </Box>
    </Box>
  );
};
