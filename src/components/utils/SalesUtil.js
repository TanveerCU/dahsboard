import React from 'react'
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';
import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded'; 

function SalesUtil({title,value,percent,color}) {
    return (
        <div>

<div className="space-y-2 text-blue-900 shadow-xl px-10 py-5 flex-initial ml-5 mb-8">
    <span className="block text-lg font-bold">{title}</span>
    <span className="block space-x-5">
    <span className="text-2xl font-extrabold">${value}</span>
    <span className="space-x-1">
    <span>{percent}</span>
    {(color==='red') ?
    <ArrowDownwardRoundedIcon style={{color:`${color}`}}/>
    :
    <ArrowUpwardRoundedIcon style={{color:`${color}`}}/>
    }

    </span>
    </span>
    <span className="block text-blue-500">Compare to Last Month</span>
    </div> 
           
        </div>
    )
}

export default SalesUtil
