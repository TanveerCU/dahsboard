import React from 'react'
import TableUtils from '../utils/TableUtils';
import {useTransaction} from '../../data/allData';

function Transactions() {
  
    const data = useTransaction();

    return (
        <div className="ml-14 mt-12 pt-8 flex flex-col items-center justify-center  sm:ml-48 sm:mt-16 sm:items-start" >
            
            <TableUtils data={data} text="Transactions Detail" />
       
        </div>
    )
}

export default Transactions
