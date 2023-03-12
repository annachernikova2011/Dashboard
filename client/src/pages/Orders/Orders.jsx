import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import axios from 'axios';

export default function Orders() {
  const [rowData, setRowData] = useState([]);
  const columnDefs = [{ field: 'title' }, { field: 'quantity' }, { field: 'price' }];
  useEffect(() => {
    axios('/orders')
      .then((res) => setRowData(res.data));
  }, []);
  rowData.slice(1, 4);
  return (
    <div className="ag-theme-alpine" style={{ height: '260px', width: '500px', border: 'none' }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
      />
    </div>
  );
}
