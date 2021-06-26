import { useDemoData } from '@material-ui/x-grid-data-generator';
import {user} from './userData';
import { product } from './productData';

import ShowUser from '../components/utils/ShowUser';

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

export const useUser = ()=>{

  const columns = [
    {
      field: 'img',
      headerName: 'User',
      width: 300,
      renderCell: (params) => (
        <strong className="flex space-x-5 items-center">
          <img src={params.value} alt="pic" className="h-8 w-8 rounded-full"/>
          <ShowUser/>
         
        </strong>
      ),
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
    },
    {
      field: 'first',
      headerName: 'First Name',
      width: 150,
    },
    {
      field: 'last',
      headerName: 'Last Name',
      width: 150,
    },
    {
      field: 'created_at',
      headerName: 'Created At',
      width: 250,
    },
    {
      field: 'country',
      headerName: 'Country',
      width: 280,
    }
  ];

  const data={
    rows:[...user],
    columns:[...columns]
  }
  return data;

}

export const useProduct =()=>{
  const columns = [
    {
      field: 'product-image-url',
      headerName: 'Product',
      width: 300,
      renderCell: (params) => (
        <strong className="flex space-x-5 items-center">
          <img src={params.value} alt="pic" className="h-8 w-8 rounded-full"/>
          <ShowUser/>
         
        </strong>
      ),
    },
    {
      field: 'product-name',
      headerName: 'Product Name',
      width: 300,
    },
    {
      field: 'header-top-left-text',
      headerName: 'Category',
      width: 150,
    }]

    const data={
      rows:[...product],
      columns:[...columns]
    }
    return data;
   

}

