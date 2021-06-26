import { useDemoData } from '@material-ui/x-grid-data-generator';
import {user} from './userData';
import { product } from './productData';
import Display from '../components/utils/Display';

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
      width: 180,
      renderCell: (params) => (
        <strong className="flex space-x-5 items-center">
          <img src={params.value} alt="pic" className="h-8 w-8 rounded-full"/>
          <Display
          type={"u"}
          img={params.getValue(params.id,'img')}
          email={params.getValue(params.id,'email')}
          first={params.getValue(params.id,'first')}
          last={params.getValue(params.id,'last')}
          create={params.getValue(params.id,'created_at')}
          country={params.getValue(params.id,'country')}
          />
         
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
      width: 150,
      renderCell: (params) => (
        <strong className="flex space-x-5 items-center">
          <img src={params.value} alt="pic" className="h-8 w-8 rounded-full"/>
          <Display
           type={"p"}
           title={params.getValue(params.id,'product-name')}
           cat={params.getValue(params.id,'header-top-left-text')}
           img={params.getValue(params.id,'product-image-url')}
          />
         
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

