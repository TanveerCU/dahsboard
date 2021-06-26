import React from 'react'
import TableUtils from '../utils/TableUtils';
import {useSalesYear, useSalesMonth} from '../../data/allData';

function Sales() {
    const mdata = useSalesMonth();
    const ydata = useSalesYear();

    return (
        <div className="ml-14 mt-12 pt-8 flex flex-col items-center justify-center space-y-28  sm:ml-48 sm:mt-16 sm:items-start" >
            <TableUtils data={mdata} text="Monthly Sales" />
            <TableUtils data={ydata} text="Yearly Sales" />
        </div>
    )
}

export default Sales
