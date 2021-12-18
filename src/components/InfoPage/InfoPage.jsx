import React from 'react';
import { DataGrid } from '@mui/x-data-grid';


// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'threeMade', headerName: '3pt Made', width: 130 },
    { field: 'threeMissed', headerName: '3pt Missed', width: 130 },
  
  ];

  const rows = [
    { id: 1, firstName: 'Nick', threeMade: 3, threeMissed: 4},
    { id: 2, firstName: 'Jared', threeMade: 3, threeMissed:5 },
    { id: 3, firstName: 'Mike', threeMade: 3, threeMissed: 5 },
  ];

    return (
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
  );
}
export default InfoPage;
