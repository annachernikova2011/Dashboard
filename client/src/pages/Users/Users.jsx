import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import axios from 'axios';

export default function Users() {
  const [rowData, setRowData] = useState([]);
  console.log(rowData);
  const columnDefs = [{ field: 'name' }, { field: 'phone' }];
  useEffect(() => {
    axios('/users')
      .then((res) => setRowData(res.data));
  }, []);
  rowData.slice(1, 4);
  return (
    <div className="ag-theme-alpine" style={{ height: '260px', width: '400px' }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
      />
    </div>
  );
}
