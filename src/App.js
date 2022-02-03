import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Input, TextField } from '@mui/material';

const App = () => {
  const [users, setUsers] = React.useState([
    { id: 1, lastName: 'Denisov', firstName: 'Adam', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ]);

  setTimeout(function () {
    setUsers((prev) => [...prev,{ id: 10, lastName: 'Сейтек', firstName: 'Денисов', age: 35 }]);
  }, 5000);

  const columns = [
    { field: 'id', headerName: 'Selected 2 users', width: 270 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];

  return (
    <div className='wrapper'>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <TextField id='outlined-basic' label='Outlined' variant='outlined' />
        <Button variant='contained'>ADD USER</Button>
      </div>
      <div style={{ height: '450px' }}>
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default App;
