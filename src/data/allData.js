import { useDemoData } from '@material-ui/x-grid-data-generator';

export const useTransaction = ()=>{
    const { data } = useDemoData({
        dataSet: 'Commodity',
        rowLength: 100,
        maxColumns: 10,
      });
      return data;
}




///////////////sales data

export const useSalesYear = ()=>{
  const { data } = useDemoData({
      dataSet: 'Commodity',
      rowLength: 200,
      maxColumns: 10,
    });
    return data;
}

export const useSalesMonth = ()=>{
  const { data } = useDemoData({
      dataSet: 'Commodity',
      rowLength: 50,
      maxColumns: 10,
    });
    return data;
}


/////////////reports
export const useSalesReport = ()=>{
  const { data } = useDemoData({
      dataSet: 'Commodity',
      rowLength: 200,
      maxColumns: 10,
    });
    return data;
}

export const useTransactionReport = ()=>{
  const { data } = useDemoData({
      dataSet: 'Commodity',
      rowLength: 100,
      maxColumns: 10,
    });
    return data;
}

export const useUserReport = ()=>{
  const { data } = useDemoData({
      dataSet: 'Commodity',
      rowLength: 100,
      maxColumns: 10,
    });
    return data;
}

