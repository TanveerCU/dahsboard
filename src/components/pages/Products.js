import React from 'react'
import TableUtils from '../utils/TableUtils';
import {useProduct} from '../../data/allData';

function Products() {
    const data = useProduct();
    return (
        <div className="ml-14 mt-12 pt-8 flex flex-col items-center justify-center  sm:ml-48 sm:mt-16 sm:items-start" >
            <TableUtils data={data} text="Product Information" />
        </div>
    )
}

export default Products
