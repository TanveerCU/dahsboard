import * as React from 'react';
import { DataGrid, 
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
  GridToolbarColumnsButton
 } from '@material-ui/data-grid';

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
      <GridToolbarFilterButton />
      <GridToolbarColumnsButton />
    </GridToolbarContainer>
  );
}

export default function ColumnSelectorGrid({data,text}) {
    const [pageSize, setPageSize] = React.useState(5);

      const handlePageSizeChange = (params) => {
        setPageSize(params.pageSize);
      };
  return (
    <div className="mx-auto space-y-8" style={{ height: 400, width: '95%' }}>
    <div className='text-blue-900 text-lg font-bold'>{text}</div>
    <DataGrid
        {...data}
        components={{
        Toolbar: CustomToolbar,
        }}
        pageSize={pageSize}
        onPageSizeChange={handlePageSizeChange}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
    />
</div>
  );
}
