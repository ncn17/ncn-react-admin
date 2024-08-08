import { Box, useTheme } from '@mui/material';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';

import { tokens } from '../../theme';
import { mockDataContacts } from '../../data/mockData';
import { Header } from '../../components/header';

export const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns: GridColDef<(typeof mockDataContacts)[number]>[] = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'registrarId',
      headerName: 'Register ID',
      flex: 1,
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'age',
      headerName: 'Age',
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
      field: 'address',
      headerName: 'Adress',
      type: 'string',
      flex: 1,
    },
    {
      field: 'city',
      headerName: 'City',
      type: 'string',
      flex: 1,
    },
    {
      field: 'zipCode',
      headerName: 'ZipCode',
      type: 'string',
      flex: 1,
    },
  ];

  return (
    <Box m={2}>
      <Header
        title="contacts"
        subTitle="List of Contacts for Future Reference"
      />
      <Box
        mt="20px"
        height="75vh"
        sx={{
          '& .MuiDataGrid-toolbarContainer button': {
            color: `${colors.grey[200]} !important`,
          },
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
          rows={mockDataContacts}
          columns={columns}
          checkboxSelection={false}
          slots={{ toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};
