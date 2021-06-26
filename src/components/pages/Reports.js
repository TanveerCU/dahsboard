import React from 'react';
import TableUtils from '../utils/TableUtils';
import {useSalesReport, useTransactionReport, useUserReport} from '../../data/allData';


function Reports() {
    const sdata = useSalesReport();
    const tdata = useTransactionReport();
    const udata = useUserReport()
    return (
        <div className="ml-14 mt-12 pt-8 flex flex-col items-center justify-center space-y-28  sm:ml-48 sm:mt-16 sm:items-start" >
            <TableUtils data={sdata} text="Sales Report" />
            <TableUtils data={tdata} text="Transactions Repor" />
            <TableUtils data={udata} text="Users Report" />
        </div>
    )
}

export default Reports
