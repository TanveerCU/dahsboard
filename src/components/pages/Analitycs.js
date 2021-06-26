import React from 'react'
import GraphChart from '../utils/GraphChart';
import BarStat from '../utils/BarStat';
import PieStat from '../utils/PieStat'

function Analitycs() {
    return (
        <div className="ml-14 mt-12 pt-8 flex flex-col items-center justify-center   sm:ml-48 sm:mt-16 sm:items-start" >
            {/* Revanue Chart */}

            <section className=" mb-8 shadow-md">
            <span className="pl-8 pb-5 block text-lg font-bold  text-blue-900 ">Revenue Chart</span>
                <GraphChart />
            </section>



            <section className="flex justify-center items-center flex-wrap mt-8 sm:space-x-16 mb-8 space-y-16">
                <span className="shadow-xl">
                <span className="pl-8 pb-5 block text-lg font-bold  text-blue-900 ">Sales Chart</span>
                <BarStat />
                </span>
                <span className="flex flex-col items-center shadow-xl">
                <span className="block text-lg font-bold  text-blue-900 ">Export Chart</span>
                <PieStat />
                </span>
            </section>





        </div>
    )
}

export default Analitycs
